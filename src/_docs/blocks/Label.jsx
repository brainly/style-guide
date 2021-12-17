import React from 'react';
import {styled} from '@storybook/theming';

const Status = styled.span`
  margin-left: 8px;
`;

// eslint-disable-next-line react/prop-types
const Label = ({children, status}) => {
  return (
    <>
      <span>{children}</span>
      <Status>{status}</Status>
    </>
  );
};

export {Label};
