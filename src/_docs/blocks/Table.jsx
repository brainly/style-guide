// @flow

import React, {useContext} from 'react';
import {DocsContext} from '@storybook/addon-docs/dist/esm/blocks/DocsContext';
import {DocsStory} from './DocsStory';

interface PropsTypes {
  name?: string;
}

const Cell = ({content}) => (
  <td dangerouslySetInnerHTML={{__html: content}}></td>
);

const Heading = ({content}) => (
  <th dangerouslySetInnerHTML={{__html: content}}></th>
);

const Table = ({headings, rows}) => {
  return (
    <table className="sbdocs sbdocs-table css-1jphud">
      <thead>
        <tr>
          {headings.map((content, index) => (
            <Heading key={index} content={content} />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr>
            <Cell content={row.pattern} />
            <Cell content={row.comment} />
            <Cell content={row.status} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
