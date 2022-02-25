// @flow

import React from 'react';
import {styled} from '@storybook/theming';

const StyledTable = styled.table(({theme}) => ({
  width: '100%',
  fontFamily: theme.typography.fonts.base,
  lineHeight: 1.4,
  fontSize: theme.typography.size.s2,
  color: theme.color.defaultText,
  marginTop: 10,
}));

const StyledHeading = styled.th(() => ({
  fontWeight: 'bold',
  color: '#333333',
  border: '1px solid rgba(0,0,0,.1)',
  margin: '0',
  padding: '6px 13px',
}));

const StyledCell = styled.td(() => ({
  border: '1px solid rgba(0,0,0,.1)',
  margin: '0',
  padding: '6px 13px',
}));

interface PropsTypes {
  name?: string;
}

const Cell = ({content}) => (
  <StyledCell dangerouslySetInnerHTML={{__html: content}}></StyledCell>
);

const Heading = ({content}) => (
  <StyledHeading dangerouslySetInnerHTML={{__html: content}}></StyledHeading>
);

const Table = ({headings, rows}) => {
  return (
    <StyledTable className="sbdocs sbdocs-table">
      <thead>
        <tr>
          {headings.map((content, index) => (
            <Heading key={index} content={content} />
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            <Cell content={row.pattern} />
            <Cell content={row.comment} />
            <Cell content={row.status} />
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
