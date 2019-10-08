// @flow

import React from 'react';
import Navigation from './Navigation';
import Head from './Head';
import navigation from '../navigation';
import packageJSON from '../../../package.json';
import site from '../config';
import slugify from '../slugify';

const version = packageJSON.version;

type PropsType = {navigationIdx?: number, ...};

const ItemsPage = ({navigationIdx}: PropsType) => {
  const pageConfig = navigation[navigationIdx];

  return (
    <html>
      <Head page={pageConfig} site={site} />
      <body>
        <script src="images/icons.js" async />
        <script src="images/icons.js" async />
        <script src="images/subjects-icons.js" async />
        <script src="images/subjects-mono-icons.js" async />
        <script src="images/math-symbols-icons.js" async />

        <Navigation navigation={navigation} version={version} />

        <div className="data-container">
          <h1 className="main-header">
            Brainly style guide - {pageConfig.name}
          </h1>

          {pageConfig.elements.map(({name, component}) => (
            <article key={name}>
              <h2 className="article-header" id={slugify(name)}>
                {name}
                <a href={`#${slugify(name)}`} className="permalink">
                  #
                </a>
              </h2>
              {component()}
            </article>
          ))}
        </div>

        <div className="copy-helper copy-helper--fixed copy-helper--hidden">
          <pre className="copy-helper__code-wrapper">
            <code className="copy-helper__code" id="sg-code" />
          </pre>

          <div className="copy-helper__buttons">
            <button
              className="sg-icon-as-button sg-icon-as-button--dark js-grow-button copy-helper__button"
              title="Show more/less"
            >
              <div className="sg-icon-as-button__hole">
                <svg className="sg-icon sg-icon--adaptive sg-icon--x22">
                  <use xlinkHref="#icon-arrow_up" />
                </svg>
              </div>
            </button>

            <button
              className="sg-icon-as-button sg-icon-as-button--dark js-copy-button"
              title="Copy to the clipboard"
            >
              <div className="sg-icon-as-button__hole">
                <svg className="sg-icon sg-icon--adaptive sg-icon--x22">
                  <use xlinkHref="#icon-answer" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <script src="js/highlight-markup.js" />
      </body>
    </html>
  );
};

export default ItemsPage;
