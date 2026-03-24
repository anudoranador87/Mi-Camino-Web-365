// ── DARK MODE ─────────────────────────────────────────────
(function () {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark-mode');
  }

  document.addEventListener('DOMContentLoaded', () => {
    syncIcon();

    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      syncIcon();
    });
  });
  

  function syncIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    const isDark = document.documentElement.classList.contains('dark-mode');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  }
})();

// ── CONTADORES ────────────────────────────────────────────
// Solo contadores honestos — calculados desde el DOM
// o valores reales actualizados a mano
document.addEventListener("DOMContentLoaded", () => {

  const stats = {
    "c-days":        document.querySelectorAll(".entry").length,
    "c-bugs":        document.querySelectorAll(".li-icon.b").length,
    "stat-projects": 3  // Campus & Crema · Mangata & Gallo · Technical Documentation Page
  };

  for (const id in stats) {
    const el = document.getElementById(id);
    if (el) el.textContent = stats[id];
  }

});

