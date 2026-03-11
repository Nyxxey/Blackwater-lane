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

function updateShift() {
  const hour = new Date().getHours();
  const el = document.getElementById('currentShift');
  if (!el) return;

  if (hour >= 6 && hour < 14) {
    el.textContent = 'Day Shift';
  } else if (hour >= 14 && hour < 22) {
    el.textContent = 'Swing Shift';
  } else {
    el.textContent = 'Night Watch';
  }
}

updateClock();
updateShift();
setInterval(updateClock, 1000);
setInterval(updateShift, 60000);

// ===== Calculate Durations =====
function updateDurations() {
  const now = new Date();
  const cells = document.querySelectorAll('.duration[data-start]');

  cells.forEach(cell => {
    const startStr = cell.getAttribute('data-start');
    const [hours, minutes] = startStr.split(':').map(Number);

    const start = new Date(now);
    start.setHours(hours, minutes, 0, 0);

    // If start time is in the future today, it's a pending job
    if (start > now) {
      const diff = start - now;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      cell.textContent = `Starts in ${h}h ${m}m`;
      cell.style.color = 'var(--text-muted)';
      return;
    }

    // If start was yesterday evening (for overnight shifts)
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

updateDurations();
setInterval(updateDurations, 60000);
