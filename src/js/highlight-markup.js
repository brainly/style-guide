/*eslint-disable */
var copyHelper = document.querySelector('.copy-helper');
var copyHelperCode = copyHelper.querySelector('.copy-helper__code');
var copyButton = copyHelper.querySelector('.js-copy-button');
var growButton = copyHelper.querySelector('.js-grow-button');

hljs.configure({
  languages: ['html']
});

document.querySelector('.data-container').addEventListener('click', function(e) {
  var prevTarget = null;
  var target = e.target;

  while (target.tagName.toLowerCase() === 'use' || target.classList.toString().indexOf('sg-') !== -1) {
    prevTarget = target;
    target = target.parentNode;
  }

  if (prevTarget) {
    copyHelper.classList.remove('copy-helper--hidden');

    var markup = prevTarget.outerHTML;
    markup = markup.replace(/ xmlns:xlink="http:\/\/www\.w3\.org\/1999\/xlink"/g, '');
    copyHelperCode.innerText = markup;

    hljs.highlightBlock(copyHelperCode);
  } else {
    copyHelper.classList.add('copy-helper--hidden');
  }
});

new Clipboard(copyButton, {
  target: function() {
    return copyHelperCode;
  }
});

growButton.addEventListener('click', function() {
  growButton.classList.toggle('copy-helper__button--flip');
  copyHelper.classList.toggle('copy-helper--big');
});
/*eslint-enable */
