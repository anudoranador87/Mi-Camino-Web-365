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

// ── BARRAS ANIMADAS
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Selecciono todas las barras de habilidad
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  
  const observerOptions = {
    root: null, // El viewport del navegador
    rootMargin: '0px', // Sin margen adicional
    threshold: 0.1 // El callback se ejecuta cuando al menos el 10% de la barra de habilidad es visible
  };

  // Callback que se ejecuta cuando un elemento cruza el umbral de visibilidad
  const animateSkillBar = (entries, observer) => {
    entries.forEach(entry => {
      // Si la barra de habilidad es visible en el viewport, animamos su ancho
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        // Obtiene el ancho objetivo desde el atributo data-width
        const targetWidth = skillBar.getAttribute('data-width');
        // Anima la barra de habilidad al ancho objetivo
        skillBar.style.width = `${targetWidth}%`;
        // Deja de observar esta barra de habilidad para evitar animarla nuevamente
        observer.unobserve(skillBar);
      }
    });
  };

  // esto crea un nuevo IntersectionObserver con el callback y las opciones definidas
  const observer = new IntersectionObserver(animateSkillBar, observerOptions);

  // Observa cada barra de habilidad para detectar cuándo entra en el viewport
  skillBars.forEach(skillBar => {
    observer.observe(skillBar);
  });
});


// ── BARRAS DE BÚSQUEDA
// ─────────────────────────────────────────────


document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');  // Me aseguro de que el elemento exista antes de continuar
  const allEntries = document.querySelectorAll('article.entry'); // Selecciono todas las entradas del diario
  const noResultsMessage = document.getElementById('no-results');// Elemento para mostrar mensaje de "No se encontraron resultados"

  const applyFilters = () => { // Función para aplicar los filtros de búsqueda
    const searchTerm = searchInput.value.toLowerCase().trim(); // Obtengo el término de búsqueda en minúsculas y sin espacios al inicio o al final
    let visibleEntriesCount = 0;

    allEntries.forEach(entry => {
      const entryText = entry.textContent.toLowerCase();
      const isSearchMatch = entryText.includes(searchTerm);
     
      const isCurrentlyHiddenByOtherFilter = entry.style.display === 'none';

      if (isSearchMatch && !isCurrentlyHiddenByOtherFilter) {
        entry.style.display = ''; 
        visibleEntriesCount++;
      } else {
        entry.style.display = 'none'; 
      }
    });

   
    if (visibleEntriesCount === 0) {
      noResultsMessage.style.display = 'block';
    } else {
      noResultsMessage.style.display = 'none';
    }
  };


  searchInput.addEventListener('input', applyFilters);

  
  applyFilters();
});