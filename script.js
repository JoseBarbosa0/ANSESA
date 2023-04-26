window.addEventListener('scroll', function() {
  var animarImgs = document.querySelectorAll('.animar');
  for (var i = 0; i < animarImgs.length; i++) {
    var posicion = animarImgs[i].getBoundingClientRect().top;
    var pantalla = window.innerHeight;
    if (posicion < pantalla) {
      animarImgs[i].style.transform = 'translateY(0)';
    }
  }
});