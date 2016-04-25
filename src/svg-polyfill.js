(function () {
  function inject() {
    var svgWrapper = document.createElement('div');
    svgWrapper.innerHTML = '#SVG#';
    svgWrapper.style.height = '0';
    svgWrapper.style.overflow = 'hidden';
    document.body.appendChild(svgWrapper);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject)
  } else {
    inject();
  }
})();
