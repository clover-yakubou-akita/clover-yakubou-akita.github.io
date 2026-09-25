document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');
  if (!header) return;
  var wrap = header.querySelector('.nav');
  var nav = wrap && wrap.querySelector(':scope > nav');
  if (!wrap || !nav) return;

  if (!nav.id) nav.id = 'site-navigation';

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'mobile-nav-toggle';
  button.setAttribute('aria-controls', nav.id);
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-label', 'メニューを開く');
  button.innerHTML = '<span class="mobile-nav-icon" aria-hidden="true"><i></i><i></i><i></i></span>';
  wrap.appendChild(button);

  function setOpen(open) {
    header.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    button.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  }

  button.addEventListener('click', function () {
    setOpen(!header.classList.contains('menu-open'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') setOpen(false);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 800) setOpen(false);
  });
});
