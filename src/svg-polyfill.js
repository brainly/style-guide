var parent = window.parent || window.top;
var parentBody = parent ? parent.document.body : null;

if(!parentBody) {
  console.warn('Parent window not found.')
} else {
  var svg = document.createElement('svg');
  var symbols = document.querySelectorAll('symbol');

  for(var i=0; i &lt; symbols.length; i++) {
    svg.appendChild(symbols[i]);
  }

  parentBody.appendChild(svg);
}
