import React from 'react';
import {styled} from '@storybook/theming';

const Status = styled.span`
  margin-left: 8px;
`;

// @ts-expect-error TS7031
// eslint-disable-next-line react/prop-types
const Label = ({children, status}) => {
  return (
    <div
      style={{
        fontSize: '14px',
        padding: '2px 0',
        lineHeight: '14px',
      }}
    >
      <span>{children}</span>
      <Status>{status}</Status>
    </div>
  );
};

export {Label};
