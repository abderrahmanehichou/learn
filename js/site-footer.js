window.addEventListener('scroll', function() {
    var footer = document.getElementById('site-footer');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.offsetHeight;

    // Si el usuario ha llegado al final de la página, muestra el footer
    if (scrollPosition + windowHeight >= bodyHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});
