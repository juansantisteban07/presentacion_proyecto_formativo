/* ====================================================================
   SCRIPT.JS — Visor de imagen ampliada (lightbox) para la sección
   de Diagramas. Solo se activa al hacer clic en el botón
   "Ver imagen ampliada" de cada diagrama.
   ==================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const zoomButtons = document.querySelectorAll('.zoom-btn');

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Imagen ampliada';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  zoomButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const src = btn.getAttribute('data-img');
      const alt = btn.getAttribute('data-alt');
      openLightbox(src, alt);
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);

  /* Cerrar al hacer clic fuera de la imagen */
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  /* Cerrar con la tecla Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
      closeLightbox();
    }
  });
});