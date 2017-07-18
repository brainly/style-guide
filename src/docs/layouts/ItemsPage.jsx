import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../_data/package.json';
import site from '../config';
import slugify from 'slugify';

const version = packageJSON.version;
const ItemsPage = ({navigationIdx}) => {
  const pageConfig = navigation[navigationIdx];

  return <html>
    <Head page={pageConfig} site={site}/>
    <body>

      <script src="images/icons.js" async></script>
      <script src="images/subjects-icons.js" async></script>

      <Navigation navigation={navigation} version={version}/>

      <div className="data-container">
        <h1 className="main-header">Brainly style guide - {pageConfig.name}</h1>

        {pageConfig.elements.map(({name, component}) =>
          <article key={name}>
            <h2 className="article-header" id={slugify(name)}>
              {name}
              <a href={'#' + slugify(name)} className="permalink">#</a>
            </h2>
            {component()}
          </article>
        )}


      </div>

      <div className="copy-helper copy-helper--hidden">
        <pre className="copy-helper__code-wrapper"><code className="copy-helper__code" id="sg-code"></code></pre>

        <div className="copy-helper__buttons">
          <button className="sg-icon-as-button sg-icon-as-button--dark js-grow-button copy-helper__button"
            title="Show more/less">
            <div className="sg-icon-as-button__hole">
              <svg className="sg-icon sg-icon--adaptive sg-icon--x22">
                <use xlinkHref="#icon-arrow_up"></use>
              </svg>
            </div>
          </button>

          <button className="sg-icon-as-button sg-icon-as-button--dark js-copy-button" title="Copy to the clipboard">
            <div className="sg-icon-as-button__hole">
              <svg className="sg-icon sg-icon--adaptive sg-icon--x22">
                <use xlinkHref="#icon-answer"></use>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <script>
        {`
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
`}
      </script>

    </body>
  </html>;
};

ItemsPage.propTypes = {
  navigationIdx: PropTypes.number

};

export default ItemsPage;
