/* ================================================================
   theme.js — Dark mode compartido para todo el portfolio
   Usado por: index.html, skills.html, education.html,
              projects.html, diario-365.html

   Lógica:
   1. Al cargar la página, lee localStorage para aplicar el tema
      guardado — así persiste entre páginas sin parpadeo.
   2. Al hacer clic en el botón, alterna la clase y guarda en
      localStorage para que la siguiente página lo recuerde.
   3. Si no hay preferencia guardada, respeta prefers-color-scheme
      del sistema operativo del usuario.
================================================================ */

(function () {

  /* ── 1. APLICAR TEMA AL CARGAR (antes de que se pinte nada) ──
           */
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark-mode');
  }

  /* ── 2. AHORA SINCRONIZAR ICONO Y BOTÓN al cargar ──────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    syncIcon();

    const btn = document.getElementById('theme-toggle');
    if (!btn) return; // si la página no tiene botón, salir

    /* ── 3. TOGGLE AL HACER CLIC ────────────────────────────── */
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      syncIcon();
    });
  });s

  /* ── HELPER: actualiza el icono luna/sol ─────────────────── */
  function syncIcon() {
    const icon = document.getElementById('theme-icon');
    if (!icon) return;
    const isDark = document.documentElement.classList.contains('dark-mode');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  }

})();