(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var svgWrapper = document.createElement('div');
    svgWrapper.innerHTML = '#SVG#';
    svgWrapper.style.height = '0';
    svgWrapper.style.overflow = 'hidden';
    document.body.appendChild(svgWrapper);
  })
})();
