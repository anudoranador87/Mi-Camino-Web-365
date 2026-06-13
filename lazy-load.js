// ── LAZY LOADING PARA IMÁGENES Y VÍDEOS
// Automatically apply lazy loading to all images and videos

document.addEventListener('DOMContentLoaded', () => {
  // Agregar loading="lazy" a todas las imágenes que no lo tengan
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  // Intersection Observer para vídeos con autoplay
  const videoObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        // Cargar y reproducir cuando es visible
        if (video.hasAttribute('data-src')) {
          const sources = video.querySelectorAll('source');
          sources.forEach(source => {
            if (source.hasAttribute('data-src')) {
              source.setAttribute('src', source.getAttribute('data-src'));
            }
          });
          video.load();
          video.play();
          observer.unobserve(video);
        }
      }
    });
  }, videoObserverOptions);

  // Observar todos los vídeos con autoplay
  document.querySelectorAll('video[autoplay]').forEach(video => {
    videoObserver.observe(video);
  });
});
