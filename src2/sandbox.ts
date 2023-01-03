import "./main.scss";
import * as styleguide from "./index";

function importAll(r) {
  r.keys().forEach(r);
}

// load icon sprites
importAll(require.context("./images/logos", true, /\.svg$/));
importAll(require.context("./images/icons", true, /\.svg$/));
importAll(require.context("./images/subjects", true, /\.svg$/));
importAll(require.context("./images/subjects-mono", true, /\.svg$/));
importAll(require.context("./images/math-symbols", true, /\.svg$/));
importAll(require.context("./images/mobile-icons", true, /\.svg$/));
Object.keys(styleguide).forEach((exportName) => {
  // eslint-disable-next-line import/namespace
  window[exportName] = styleguide[exportName];
});