var currentUrl = window.location.pathname.replace(/\/$/, '');
var links = document.querySelectorAll('.panel-tabs a');

links.forEach(function(link) {
    var href = link.getAttribute('href').replace(/\/$/, '');
    if (currentUrl.startsWith(href)) {
      document.querySelectorAll('.panel-tabs a.is-active').forEach(function(activeLink) {
          activeLink.classList.remove('is-active');
      });
      link.classList.add('is-active');
    }
});