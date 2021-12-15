// @flow

import {styled} from '@storybook/theming';

const Label = styled.div(({theme}) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s1,
  fontWeight: '400',
  lineHeight: '14px',
  color: '#323c45',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '0px 7px',
  display: 'inline-block',
  marginLeft: '4px',
  border: '1px solid #c3d1dd',
}));

export {Label};
