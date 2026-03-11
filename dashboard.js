// ===== Assignment Data Pools =====
const assignments = {
  day: [
    { task: 'School Zone Patrol', location: 'Lincoln Elementary & 3rd St' },
    { task: 'Community Outreach Event', location: 'Blackwater Town Hall' },
    { task: 'Traffic Enforcement', location: 'Harbor Blvd & Main St' },
    { task: 'Welfare Check - Elderly Resident', location: '42 Elm Grove Ln' },
    { task: 'Shoplifting Report', location: 'Riverside Market Plaza' },
    { task: 'Parking Violation Sweep', location: 'Downtown District' },
    { task: 'Witness Statement - Break-in', location: 'Precinct 7 - Room 2A' },
    { task: 'Patrol - Business District', location: 'Commerce Row & 8th Ave' },
    { task: 'Court Escort Duty', location: 'Blackwater County Courthouse' },
    { task: 'Accident Report Filing', location: 'Precinct 7 - Desk' },
    { task: 'Noise Complaint Follow-up', location: '17 Birch St' },
    { task: 'Stolen Vehicle Report', location: 'Precinct 7 - Room 3B' }
  ],
  swing: [
    { task: 'Bar District Patrol', location: 'Neon Row & 6th Ave' },
    { task: 'Domestic Disturbance Response', location: '88 Greystone Apartments' },
    { task: 'Suspicious Vehicle Report', location: 'Industrial Park - Lot C' },
    { task: 'DUI Checkpoint Setup', location: 'River Bridge & Harbor Blvd' },
    { task: 'Assault Investigation', location: 'Blackwater General Hospital' },
    { task: 'Vandalism Report', location: 'Old Mill Park' },
    { task: 'Missing Person Follow-up', location: 'Precinct 7 - CID Office' },
    { task: 'Noise Complaint - Live Music', location: 'The Rusty Anchor Bar' },
    { task: 'Foot Patrol - Transit Hub', location: 'Blackwater Central Station' },
    { task: 'Evidence Pickup', location: 'Forensics Lab - Building D' },
    { task: 'Trespassing Report', location: 'Abandoned Cannery - Dock 9' },
    { task: 'Warrant Service Assist', location: '55 Ashford Terrace' }
  ],
  night: [
    { task: 'Patrol - Waterfront District', location: 'Dock Row & 5th Ave' },
    { task: 'Burglary Alarm Response', location: 'First National Bank - Branch 3' },
    { task: 'Witness Interview - Martinez Case', location: 'Precinct 7 - Room 3B' },
    { task: 'Evidence Review - Harbor Theft', location: 'Evidence Room B' },
    { task: 'Surveillance Detail', location: 'Warehouse 14 - Port District' },
    { task: 'Suspicious Activity Report', location: 'Greystone Alley & 2nd St' },
    { task: 'Patrol - Residential Sector', location: 'Oakwood Heights' },
    { task: 'Report Filing - Weekly Summary', location: 'Precinct 7 - Desk' },
    { task: 'Narcotics Tip Follow-up', location: 'Undisclosed Location' },
    { task: 'Abandoned Vehicle Check', location: 'Route 7 Overpass' },
    { task: 'Prowler Report', location: '33 Magnolia Ct' },
    { task: 'Overnight Building Checks', location: 'Government District' }
  ]
};

const completedPool = {
  day: [
    { task: 'Morning Briefing', location: 'Precinct 7 - Briefing Room' },
    { task: 'Speed Trap Detail', location: 'School Zone - Elm St' },
    { task: 'Pedestrian Accident Report', location: 'Main St & 4th Ave' },
    { task: 'Vehicle Registration Check', location: 'Precinct 7 - Lobby' },
    { task: 'Parking Meter Audit', location: 'Downtown District' }
  ],
  swing: [
    { task: 'Shift Handoff Briefing', location: 'Precinct 7 - Briefing Room' },
    { task: 'Traffic Stop Follow-up', location: 'Main St & Harbor Blvd' },
    { task: 'Property Damage Report', location: '12 Cedar Lane' },
    { task: 'Juvenile Curfew Warning', location: 'Riverside Park' },
    { task: 'Alarm System Reset', location: 'City Library - West Branch' }
  ],
  night: [
    { task: 'Night Shift Briefing', location: 'Precinct 7 - Briefing Room' },
    { task: 'Traffic Stop Follow-up', location: 'Main St & Harbor Blvd' },
    { task: 'Building Security Check', location: 'City Hall Annex' },
    { task: 'Street Light Outage Report', location: 'Dock Row & 3rd Ave' },
    { task: 'Disturbance Call - Resolved', location: '77 Harbour View Apts' }
  ]
};

// ===== Helpers =====
function getShiftKey(hour) {
  if (hour >= 6 && hour < 14) return 'day';
  if (hour >= 14 && hour < 22) return 'swing';
  return 'night';
}

function getShiftHours(key) {
  if (key === 'day') return { start: 6, end: 14 };
  if (key === 'swing') return { start: 14, end: 22 };
  return { start: 22, end: 6 };
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomCaseNum() {
  return '#BW-' + (4400 + Math.floor(Math.random() * 600));
}

function pad(n) { return n.toString().padStart(2, '0'); }

function randomTime(shiftKey) {
  const { start, end } = getShiftHours(shiftKey);
  let hour;
  if (start < end) {
    hour = start + Math.floor(Math.random() * (end - start));
  } else {
    const range = (24 - start) + end;
    const offset = Math.floor(Math.random() * range);
    hour = (start + offset) % 24;
  }
  const min = Math.floor(Math.random() * 4) * 15;
  return `${pad(hour)}:${pad(min)}`;
}

function randomPriority() {
  const r = Math.random();
  if (r < 0.25) return 'high';
  if (r < 0.6) return 'medium';
  return 'low';
}

function randomDuration() {
  const mins = 15 + Math.floor(Math.random() * 8) * 15;
  if (mins >= 60) return `${Math.floor(mins / 60)}h ${mins % 60 > 0 ? (mins % 60) + 'm' : ''}`.trim();
  return `${mins}m`;
}

// ===== Generate Assignments =====
let currentShiftKey = null;

function generateAssignments() {
  const hour = new Date().getHours();
  const shiftKey = getShiftKey(hour);

  const pool = shuffle(assignments[shiftKey]);
  const count = 3 + Math.floor(Math.random() * 3); // 3-5 active jobs
  const activeJobs = pool.slice(0, count);

  const completedCount = 1 + Math.floor(Math.random() * 3); // 1-3 completed
  const completed = shuffle(completedPool[shiftKey]).slice(0, completedCount);

  // Build active rows
  const activeBody = document.getElementById('activeJobsBody');
  activeBody.innerHTML = '';
  activeJobs.forEach((job, i) => {
    const time = randomTime(shiftKey);
    const priority = i === 0 ? 'high' : randomPriority();
    const status = i === 0 ? '<span class="job-status active">In Progress</span>' : '<span class="job-status pending">Pending</span>';
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="case-num">${randomCaseNum()}</td>
      <td>${job.task}</td>
      <td>${job.location}</td>
      <td><span class="priority ${priority}">${priority.toUpperCase()}</span></td>
      <td>${time}</td>
      <td class="duration" data-start="${time}">--</td>
      <td>${status}</td>
    `;
    activeBody.appendChild(tr);
  });

  // Build completed rows
  const completedBody = document.getElementById('completedJobsBody');
  completedBody.innerHTML = '';
  completed.forEach(job => {
    const time = randomTime(shiftKey);
    const priority = randomPriority();
    const tr = document.createElement('tr');
    tr.classList.add('completed-row');
    tr.innerHTML = `
      <td class="case-num">${randomCaseNum()}</td>
      <td>${job.task}</td>
      <td>${job.location}</td>
      <td><span class="priority ${priority}">${priority.toUpperCase()}</span></td>
      <td>${time}</td>
      <td>${randomDuration()}</td>
      <td><span class="job-status done">Complete</span></td>
    `;
    completedBody.appendChild(tr);
  });

  // Update active job counter
  document.getElementById('activeJobCount').textContent = count;

  currentShiftKey = shiftKey;
  updateDurations();
}

// ===== Live Clock =====
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
  const dateStr = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  document.getElementById('clockTime').textContent = timeStr;
  document.getElementById('clockDate').textContent = dateStr;
}

// ===== Shift Detection =====
function updateShift() {
  const hour = new Date().getHours();
  const el = document.getElementById('currentShift');
  if (!el) return;

  const shiftKey = getShiftKey(hour);

  if (shiftKey === 'day') el.textContent = 'Day Shift';
  else if (shiftKey === 'swing') el.textContent = 'Swing Shift';
  else el.textContent = 'Night Watch';

  // Regenerate assignments when shift changes
  if (currentShiftKey && shiftKey !== currentShiftKey) {
    generateAssignments();
  }
}

// ===== Calculate Durations =====
function updateDurations() {
  const now = new Date();
  const cells = document.querySelectorAll('.duration[data-start]');

  cells.forEach(cell => {
    const startStr = cell.getAttribute('data-start');
    const [hours, minutes] = startStr.split(':').map(Number);

    const start = new Date(now);
    start.setHours(hours, minutes, 0, 0);

    if (start > now) {
      const diff = start - now;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      cell.textContent = `Starts in ${h}h ${m}m`;
      cell.style.color = 'var(--text-muted)';
      return;
    }

    if (now - start > 12 * 3600000) {
      start.setDate(start.getDate() + 1);
      if (start > now) {
        const diff = start - now;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        cell.textContent = `Starts in ${h}h ${m}m`;
        cell.style.color = 'var(--text-muted)';
        return;
      }
    }

    const elapsed = now - start;
    const h = Math.floor(elapsed / 3600000);
    const m = Math.floor((elapsed % 3600000) / 60000);

    if (h > 0) {
      cell.textContent = `${h}h ${m}m`;
    } else {
      cell.textContent = `${m}m`;
    }
    cell.style.color = 'var(--accent-glow)';
  });
}

// ===== Init =====
generateAssignments();
updateClock();
updateShift();
setInterval(updateClock, 1000);
setInterval(updateShift, 60000);
setInterval(updateDurations, 60000);
