// F5J Masters — JS de interfaz (sin dependencias propias).
// GLightbox se carga desde CDN antes de este script.
document.addEventListener('DOMContentLoaded', function () {
  // Lightbox de la galería.
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
  }

  // Menú hamburguesa (móvil).
  var burger = document.getElementById('nav-burger');
  var links = document.getElementById('nav-links');
  var iconBurger = document.getElementById('icon-burger');
  var iconClose = document.getElementById('icon-close');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open);
      iconBurger.style.display = open ? 'none' : 'block';
      iconClose.style.display = open ? 'block' : 'none';
    });
  }

  // Recordar el idioma elegido manualmente (lo usa la redirección de la raíz).
  document.querySelectorAll('[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () {
      localStorage.setItem('f5j-lang', a.dataset.lang);
    });
  });
});
