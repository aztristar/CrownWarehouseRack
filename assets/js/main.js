document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  const dropdowns = document.querySelectorAll('.dropdown');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });
  }

  dropdowns.forEach(function (dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('open');
        }
      });
    }
  });

  // Close nav when a link is clicked on mobile
  const navLinks = document.querySelectorAll('.nav-menu a:not(.dropdown-toggle)');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (siteNav) siteNav.classList.remove('open');
    });
  });
});
