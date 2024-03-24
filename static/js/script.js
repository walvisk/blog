var currentUrl = window.location.pathname.replace(/\/$/, '');
var links = document.querySelectorAll('.panel-tabs a');

links.forEach(function(link, index) {
    var href = link.getAttribute('href').replace(/\/$/, ''); // Trim trailing slashes
    if (href === currentUrl) {
        link.classList.add('is-active');
    }
});