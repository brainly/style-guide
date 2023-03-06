import './main.scss';
import * as styleguide from './index';
import * as docsUtils from './docs/utils';

function importAll(r) {
  r.keys().forEach(r);
}

// load icon sprites
importAll(require.context('./images/logos', true, /\.svg$/));
importAll(require.context('./images/icons', true, /\.svg$/));
importAll(require.context('./images/subjects', true, /\.svg$/));
importAll(require.context('./images/subjects-mono', true, /\.svg$/));
importAll(require.context('./images/math-symbols', true, /\.svg$/));
importAll(require.context('./images/mobile-icons', true, /\.svg$/));

Object.keys(styleguide).forEach(exportName => {
  window[exportName] = styleguide[exportName];
});

Object.keys(docsUtils).forEach(exportName => {
  window[exportName] = docsUtils[exportName];
});
