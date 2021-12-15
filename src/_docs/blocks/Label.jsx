// @flow

import {styled} from '@storybook/theming';

const Label = styled.div(({theme}) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s1,
  fontWeight: '600',
  lineHeight: '16px',
  color: '#a15c20',
  backgroundColor: '#fff5cf',
  borderRadius: '8px',
  padding: '0px 12px',
  display: 'inline-block',
  marginLeft: '4px',
  textTransform: 'capitalize',
  boxShadow: 'rgb(161 92 32 / 10%) 0px 0px 0px 1px',
}));

export {Label};
