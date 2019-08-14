// @flow

import React from 'react';
import slugify from '../slugify';
import {HashLink as Link} from 'react-router-hash-link';

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
    <Link to="./" className="main-menu__home sg-icon sg-icon--x30">
      <svg className="sg-icon__svg">
        <use xlinkHref="#brainly-mobile" />
      </svg>
    </Link>
    <ul className="main-menu__item">
      {navigation.map((page, index) => {
        const pageUrl = `${slugify(page.name)}.html`;

        return (
          <li key={index}>
            <Link to={pageUrl}>{page.name}</Link>
            <ul>
              {page.elements.map((element, index) => (
                <li key={index}>
                  <Link
                    to={`${pageUrl}#${slugify(element.name)}`}
                    className="js-searchable"
                  >
                    {element.name}
                  </Link>
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
