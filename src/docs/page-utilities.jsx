import * as React from 'react';
import ReactDOM from 'react-dom';
import slugify from './slugify';
import navigation from './navigation';

const blocks = navigation[3].elements;

export const sections = blocks.map(block => {
  const Component = block.component;

  return (
    <article key={block.name}>
      <h2 className="article-header" id={slugify(block.name)}>
        {block.name}
        <a href={`#${slugify(block.name)}`} className="permalink">
          #
        </a>
      </h2>
      <Component />
    </article>
  );
});

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(<div>{sections}</div>, root);
}
