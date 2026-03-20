/* ================================================================
   script.js — Dev Log 365 · Jose Aparicio
   
   Módulos:
   1. Dark mode con persistencia en localStorage
   2. Contadores de estadísticas desde el DOM
   3. Filtros por categoría
   4. Animación de barras de nivel
================================================================ */

/* ── 1. DARK MODE ────────────────────────────────────────────── */

(function () {

  // Aplicar tema al cargar — antes de que se pinte nada
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

/* ── 2. CONTADORES DE ESTADÍSTICAS ───────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  const stats = {
    'c-days':        document.querySelectorAll('.entry').length,
    'c-bugs':        document.querySelectorAll('.li-icon.b').length,
    'stat-projects': document.querySelectorAll('[data-tags*="project"]').length,
    'c-streak':      document.querySelectorAll('.entry').length
  };

  for (const id in stats) {
    const el = document.getElementById(id);
    if (el) el.textContent = stats[id];
  }

});

/* ── 3. FILTROS POR CATEGORÍA ────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
  const entries    = document.querySelectorAll('.entry[data-tags]');
  const noResults  = document.getElementById('no-results');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {

      // Actualizar estado activo
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');

      const filter = this.dataset.filter;

      let visible = 0;

      entries.forEach(entry => {
        const tags = entry.dataset.tags || '';
        const show = filter === 'all' || tags.includes(filter);
        entry.classList.toggle('hidden', !show);
        if (show) visible++;
      });

      // Mostrar mensaje si no hay resultados
      if (noResults) {
        noResults.style.display = visible === 0 ? 'block' : 'none';
      }

    });
  });

});

/* ── 4. ANIMACIÓN DE BARRAS DE NIVEL ─────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  const bars = document.querySelectorAll('.skill-bar-fill[data-width]');

  // Usar IntersectionObserver para animar solo cuando son visibles
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + '%';
        observer.unobserve(bar); // animar solo una vez
      }
    });
  }, { threshold: 0.2 });

  bars.forEach(bar => observer.observe(bar));

});