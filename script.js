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


// ── BÚSQUEDA Y FILTROS ─────────────────────────────────────────────


document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchField = document.getElementById('search-field');
  const tagSelect = document.getElementById('tag-select');
  const dateFrom = document.getElementById('date-from');
  const dateTo = document.getElementById('date-to');
  const clearBtn = document.getElementById('clear-filters');
  const noResultsMessage = document.getElementById('no-results');
  const resultsCount = document.getElementById('results-count');
  const activeFilters = document.getElementById('active-filters');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const loadMoreBtnBottom = document.getElementById('load-more-btn-bottom');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const isEnglish = document.documentElement.lang === 'en';

  let activeQuickFilter = 'all';
  const pageSize = 8;
  let visibleLimit = pageSize;

  const normalizeTags = (raw = '') =>
    raw
      .toLowerCase()
      .split(/\s+/)
      .map((t) => t.trim())
      .filter((t) => t && t !== '·');

  const getEntryFieldText = (entry, field) => {
    if (field === 'headline') {
      return (entry.querySelector('.entry-headline')?.textContent || '').toLowerCase();
    }

    if (field === 'wins') {
      const wins = Array.from(entry.querySelectorAll('.log-item'))
        .filter((item) => item.querySelector('.li-icon.w')?.textContent.trim() === '+')
        .map((item) => item.querySelector('.li-text')?.textContent || '');
      return wins.join(' ').toLowerCase();
    }

    if (field === 'debug') {
      const rightCol = entry.querySelector('.col-rule');
      const debug = rightCol ? rightCol.textContent : '';
      return debug.toLowerCase();
    }

    return entry.textContent.toLowerCase();
  };

  const parseDate = (value) => (value ? new Date(value) : null);

  const toLabel = {
    search: isEnglish ? 'Search' : 'Búsqueda',
    field: isEnglish ? 'Field' : 'Campo',
    tag: isEnglish ? 'Tag' : 'Tag',
    from: isEnglish ? 'From' : 'Desde',
    to: isEnglish ? 'To' : 'Hasta',
    quick: isEnglish ? 'Category' : 'Categoría',
    showing: isEnglish ? 'Showing' : 'Mostrando',
    of: isEnglish ? 'of' : 'de',
    entries: isEnglish ? 'entries' : 'entradas',
    loadMore: isEnglish ? 'Load more' : 'Cargar más',
  };

  const renderFilterChips = (term, field, selectedTag, fromDateRaw, toDateRaw) => {
    if (!activeFilters) return;
    const chips = [];
    if (activeQuickFilter !== 'all') chips.push(`${toLabel.quick}: ${activeQuickFilter}`);
    if (term) chips.push(`${toLabel.search}: ${term}`);
    if (field !== 'all') chips.push(`${toLabel.field}: ${field}`);
    if (selectedTag !== 'all') chips.push(`${toLabel.tag}: ${selectedTag}`);
    if (fromDateRaw) chips.push(`${toLabel.from}: ${fromDateRaw}`);
    if (toDateRaw) chips.push(`${toLabel.to}: ${toDateRaw}`);

    activeFilters.innerHTML = chips
      .map((chip) => `<span class="active-chip">${chip}</span>`)
      .join('');
    activeFilters.style.display = chips.length ? 'flex' : 'none';
  };

  const applyFilters = () => {
    const entries = Array.from(document.querySelectorAll('article.entry'));
    const term = (searchInput?.value || '').toLowerCase().trim();
    const field = searchField?.value || 'all';
    const selectedTag = tagSelect?.value || 'all';
    const fromRaw = dateFrom?.value || '';
    const toRaw = dateTo?.value || '';
    const fromDate = parseDate(dateFrom?.value);
    const toDate = parseDate(dateTo?.value);
    let visible = 0;

    entries.forEach((entry) => {
      const tags = normalizeTags(entry.dataset.tags || '');
      const quickTagOk = activeQuickFilter === 'all' || tags.includes(activeQuickFilter);
      const selectTagOk = selectedTag === 'all' || tags.includes(selectedTag);

      const entryDateRaw = entry.querySelector('time')?.getAttribute('datetime') || '';
      const entryDate = parseDate(entryDateRaw);
      const dateFromOk = !fromDate || (entryDate && entryDate >= fromDate);
      const dateToOk = !toDate || (entryDate && entryDate <= toDate);

      const fieldText = getEntryFieldText(entry, field);
      const searchOk = !term || fieldText.includes(term);

      const isMatch = quickTagOk && selectTagOk && dateFromOk && dateToOk && searchOk;
      entry.dataset.match = isMatch ? '1' : '0';
      if (isMatch) visible += 1;
    });

    let shown = 0;
    entries.forEach((entry) => {
      if (entry.dataset.match !== '1') {
        entry.style.display = 'none';
        return;
      }
      shown += 1;
      entry.style.display = shown <= visibleLimit ? '' : 'none';
    });

    if (noResultsMessage) {
      noResultsMessage.style.display = visible === 0 ? 'block' : 'none';
    }

    if (resultsCount) {
      const showing = Math.min(visible, visibleLimit);
      resultsCount.textContent = `${toLabel.showing} ${showing} ${toLabel.of} ${visible} ${toLabel.entries}`;
    }

    const canLoadMore = visible > visibleLimit;
    if (loadMoreBtn) loadMoreBtn.style.display = canLoadMore ? 'inline-flex' : 'none';
    if (loadMoreBtnBottom) loadMoreBtnBottom.style.display = canLoadMore ? 'inline-flex' : 'none';

    renderFilterChips(term, field, selectedTag, fromRaw, toRaw);
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeQuickFilter = button.dataset.filter || 'all';
      filterButtons.forEach((btn) => {
        const active = btn === button;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
      visibleLimit = pageSize;
      applyFilters();
    });
  });

  [searchInput, searchField, tagSelect, dateFrom, dateTo].forEach((el) => {
    if (el) {
      el.addEventListener('input', () => {
        visibleLimit = pageSize;
        applyFilters();
      });
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (searchField) searchField.value = 'all';
      if (tagSelect) tagSelect.value = 'all';
      if (dateFrom) dateFrom.value = '';
      if (dateTo) dateTo.value = '';
      activeQuickFilter = 'all';
      filterButtons.forEach((btn) => {
        const active = btn.dataset.filter === 'all';
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
      visibleLimit = pageSize;
      applyFilters();
    });
  }

  const handleLoadMore = () => {
    visibleLimit += pageSize;
    applyFilters();
  };

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', handleLoadMore);
    loadMoreBtn.textContent = toLabel.loadMore;
  }
  if (loadMoreBtnBottom) {
    loadMoreBtnBottom.addEventListener('click', handleLoadMore);
    loadMoreBtnBottom.textContent = toLabel.loadMore;
  }

  applyFilters();
});

// ──BANNER PRINCIPAL
// ──

document.addEventListener('DOMContentLoaded', () => {
  const availableBanner = document.getElementById('available-banner');
  const closeBannerButton = availableBanner ? availableBanner.querySelector('.close-banner') : null;
  const localStorageKey = 'availableBannerClosed';

  // 1. Comprobar si el banner fue cerrado previamente
  if (availableBanner && localStorage.getItem(localStorageKey) === 'true') {
    availableBanner.style.display = 'none';
  }

  // 2. Añadir event listener al botón de cierre
  if (closeBannerButton) {
    closeBannerButton.addEventListener('click', () => {
      if (availableBanner) {
        availableBanner.style.display = 'none'; // Ocultar el banner
        localStorage.setItem(localStorageKey, 'true'); // Guardar preferencia en localStorage
      }
    });
  }
});

// ── CONTADORES DEL DIARIO ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const entries = Array.from(document.querySelectorAll('article.entry'));
  if (!entries.length) return;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value);
  };

  const daysCount = entries.length;
  setText('c-days', daysCount);

  let bugs = 0;
  let fixes = 0;
  let projects = 0;
  const uniqueDates = new Set();

  entries.forEach((entry) => {
    const tags = (entry.dataset.tags || '')
      .toLowerCase()
      .split(/\s+/)
      .map((t) => t.trim())
      .filter((t) => t && t !== '·');

    if (tags.includes('project')) projects += 1;

    const time = entry.querySelector('time');
    const iso = time?.getAttribute('datetime');
    if (iso) uniqueDates.add(iso);

    const icons = entry.querySelectorAll('.li-icon');
    icons.forEach((icon) => {
      const cls = icon.className;
      if (cls.includes(' b')) bugs += 1;
      if (cls.includes(' f')) fixes += 1;
    });
  });

  setText('c-bugs', bugs);
  setText('stat-projects', projects);

  // Sesiones del mes actual (por fecha única)
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  let monthSessions = 0;

  const dates = Array.from(uniqueDates)
    .map((iso) => new Date(iso))
    .filter((d) => !Number.isNaN(d.getTime()))
    .sort((a, b) => b - a);

  dates.forEach((d) => {
    if (d.getMonth() === currentMonth && d.getFullYear() === currentYear) {
      monthSessions += 1;
    }
  });
  setText('c-month', monthSessions);

  // Racha actual (días naturales consecutivos desde la fecha más reciente)
  let streak = 0;
  if (dates.length) {
    streak = 1;
    for (let i = 1; i < dates.length; i += 1) {
      const prev = new Date(dates[i - 1].getFullYear(), dates[i - 1].getMonth(), dates[i - 1].getDate());
      const curr = new Date(dates[i].getFullYear(), dates[i].getMonth(), dates[i].getDate());
      const diffDays = Math.round((prev - curr) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) streak += 1;
      else break;
    }
  }
  setText('c-streak', streak);

  const ratio = bugs > 0 ? `${Math.round((fixes / bugs) * 100)}%` : '0%';
  setText('c-fixratio', ratio);

  // Actualizar número de entradas en el masthead
  const mastheadCount = document.getElementById('masthead-count');
  if (mastheadCount) mastheadCount.textContent = String(daysCount);
});