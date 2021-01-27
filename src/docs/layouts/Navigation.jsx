// @flow

import * as React from 'react';
import slugify from '../slugify';

type PropsType = {
  version: string,
  navigation: Array<{
    name: string,
    elements: Array<{name: string, ...}>,
    ...
  }>,
  ...
};

const Navigation = ({navigation, version}: PropsType) => (
  <nav className="main-menu">
    <a href="./" className="main-menu__home">
      <img src="images/logos/brainly-mobile.svg" />
    </a>
    <ul className="main-menu__item">
      {navigation.map((page, index) => {
        const pageUrl = `${slugify(page.name)}.html`;

        return (
          <li key={index}>
            <a href={pageUrl}>{page.name}</a>
            <ul>
              {page.elements.map((element, index) => (
                <li key={index}>
                  <a
                    href={`${pageUrl}#${slugify(element.name)}`}
                    className="js-searchable"
                  >
                    {element.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
    <aside>
      <div className="main-menu__search">
        <input type="search" placeholder="Search&hellip;" id="js-search-box" />
        <ul id="js-search-results" />
      </div>
      <label title="Highlight holes">
        <input type="checkbox" id="js-highlight-holes" /> Holes
      </label>
      <a href="https://github.com/brainly/style-guide" className="version">
        v{version}
      </a>
    </aside>
    <script src="js/search-and-holes.js" />
  </nav>
);

export default Navigation;
