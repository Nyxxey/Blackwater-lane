// ===== Authentication =====
const loginScreen = document.getElementById('loginScreen');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

let currentUser = null;

// Check for existing session
const saved = sessionStorage.getItem('records_officer');
if (saved) {
  currentUser = JSON.parse(saved);
  showDashboard();
}

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const badge = document.getElementById('badgeNumber').value.trim();
  const pass = document.getElementById('password').value;
  loginError.textContent = '';
  loginBtn.textContent = 'AUTHENTICATING...';
  loginBtn.style.opacity = '0.6';

  setTimeout(() => {
    const user = AUTH_USERS[badge];
    if (user && pass === user.password) {
      currentUser = user;
      sessionStorage.setItem('records_officer', JSON.stringify(user));
      loginBtn.textContent = 'ACCESS GRANTED';
      loginBtn.style.borderColor = '#4cc96a';
      loginBtn.style.color = '#4cc96a';
      setTimeout(showDashboard, 600);
    } else {
      loginBtn.textContent = 'ACCESS DENIED';
      loginBtn.style.borderColor = '#c94c4c';
      loginBtn.style.color = '#c94c4c';
      loginError.textContent = 'Invalid badge number or access code.';
      setTimeout(() => {
        loginBtn.textContent = 'ACCESS DATABASE';
        loginBtn.style.borderColor = '';
        loginBtn.style.color = '';
        loginBtn.style.opacity = '';
      }, 2000);
    }
  }, 1200);
});

function showDashboard() {
  loginScreen.style.display = 'none';
  dashboard.style.display = 'block';
  document.getElementById('navOfficer').textContent = `${currentUser.rank} ${currentUser.name} — Badge #${currentUser.badge}`;
  initDashboard();
}

document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem('records_officer');
  location.reload();
});

// ===== Clock =====
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();
  document.getElementById('clockTime').textContent = time;
  document.getElementById('clockDate').textContent = date;
}

// ===== Dashboard Init =====
function initDashboard() {
  updateClock();
  setInterval(updateClock, 1000);
  renderStats();
  renderTable(SUSPECTS);
  setupSearch();
  setupModal();
}

// ===== Stats =====
function renderStats() {
  document.getElementById('statTotal').textContent = SUSPECTS.length;
  document.getElementById('statWanted').textContent = SUSPECTS.filter(s => s.status === 'wanted').length;
  document.getElementById('statCustody').textContent = SUSPECTS.filter(s => s.status === 'in-custody').length;
  document.getElementById('statInvestigation').textContent = SUSPECTS.filter(s => s.status === 'under-investigation').length;
}

// ===== Table Rendering =====
function renderTable(records) {
  const tbody = document.getElementById('recordsBody');
  const noResults = document.getElementById('noResults');

  if (records.length === 0) {
    tbody.innerHTML = '';
    noResults.style.display = 'block';
    document.getElementById('recordsCount').textContent = 'No records found';
    return;
  }

  noResults.style.display = 'none';
  document.getElementById('recordsCount').textContent = `Showing ${records.length} of ${SUSPECTS.length} records`;

  tbody.innerHTML = records.map((s, i) => `
    <tr data-index="${SUSPECTS.indexOf(s)}">
      <td><span class="record-code">${s.code}</span></td>
      <td><span class="record-name">${s.name}</span></td>
      <td><span class="record-alias">${s.alias}</span></td>
      <td>${formatDate(s.dob)}</td>
      <td>${s.lastLocation}</td>
      <td><span class="badge threat-${s.threatLevel}">${s.threatLevel.toUpperCase()}</span></td>
      <td><span class="badge badge-${s.status}">${formatStatus(s.status)}</span></td>
      <td><span class="case-num">${s.caseNum}</span></td>
    </tr>
  `).join('');

  // Attach click handlers
  tbody.querySelectorAll('tr').forEach(row => {
    row.addEventListener('click', () => {
      const idx = parseInt(row.dataset.index);
      openModal(SUSPECTS[idx]);
    });
  });
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
}

function formatStatus(status) {
  return status.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// ===== Search & Filter =====
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const statusFilter = document.getElementById('statusFilter');
  const threatFilter = document.getElementById('threatFilter');

  function doFilter() {
    const query = searchInput.value.toLowerCase().trim();
    const status = statusFilter.value;
    const threat = threatFilter.value;

    let results = SUSPECTS.filter(s => {
      const matchesSearch = !query ||
        s.name.toLowerCase().includes(query) ||
        s.code.toLowerCase().includes(query) ||
        s.alias.toLowerCase().includes(query) ||
        s.caseNum.toLowerCase().includes(query) ||
        s.lastLocation.toLowerCase().includes(query);

      const matchesStatus = status === 'all' || s.status === status;
      const matchesThreat = threat === 'all' || s.threatLevel === threat;

      return matchesSearch && matchesStatus && matchesThreat;
    });

    renderTable(results);
  }

  searchInput.addEventListener('input', doFilter);
  statusFilter.addEventListener('change', doFilter);
  threatFilter.addEventListener('change', doFilter);
}

// ===== Detail Modal =====
function setupModal() {
  const modal = document.getElementById('detailModal');
  const closeBtn = document.getElementById('closeModal');

  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.classList.remove('active');
  });
}

function openModal(suspect) {
  const modal = document.getElementById('detailModal');

  document.getElementById('modalMugshot').textContent = suspect.name.charAt(0);
  document.getElementById('modalName').textContent = suspect.name;
  document.getElementById('modalAlias').textContent = suspect.alias === 'None on file' ? 'No known aliases' : `a.k.a. "${suspect.alias}"`;

  const codeEl = document.getElementById('modalCode');
  codeEl.textContent = suspect.code;

  const statusEl = document.getElementById('modalStatus');
  statusEl.textContent = formatStatus(suspect.status);
  statusEl.className = `modal-status badge badge-${suspect.status}`;

  const threatEl = document.getElementById('modalThreat');
  threatEl.textContent = suspect.threatLevel.toUpperCase();
  threatEl.className = `modal-threat badge threat-${suspect.threatLevel}`;

  document.getElementById('modalDob').textContent = formatDate(suspect.dob);
  document.getElementById('modalGender').textContent = suspect.gender;
  document.getElementById('modalHeight').textContent = suspect.height;
  document.getElementById('modalWeight').textContent = suspect.weight;
  document.getElementById('modalAddress').textContent = suspect.address;
  document.getElementById('modalCase').textContent = suspect.caseNum;
  document.getElementById('modalOfficer').textContent = suspect.officer;
  document.getElementById('modalDateEntered').textContent = formatDate(suspect.dateEntered);
  document.getElementById('modalAssociates').textContent = suspect.associates;
  document.getElementById('modalHistory').textContent = suspect.history;
  document.getElementById('modalNotes').textContent = suspect.notes;

  document.getElementById('modalAccessedBy').textContent = `${currentUser.rank} ${currentUser.name}`;
  const now = new Date();
  document.getElementById('modalAccessDate').textContent = now.toLocaleString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true
  });

  modal.classList.add('active');
}
