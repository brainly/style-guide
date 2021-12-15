// @flow

import {styled, css} from '@storybook/theming';

const Badge = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: ${props => props.theme.typography.size.s1}px;
  line-height: 16px;
  padding: 0px 12px;
  border-radius: 8px;
  font-weight: ${props => props.theme.typography.weight.bold};
  text-transform: capitalize;
  ${props =>
    props.status === 'positive' &&
    css`
      color: rgb(68, 128, 40);
      background: rgb(225, 255, 212);
      box-shadow: rgb(68 128 40 / 10%) 0px 0px 0px 1px inset;
    `};
  ${props =>
    props.status === 'warning' &&
    css`
      color: rgb(161, 92, 32);
      background: rgb(255, 245, 207);
      box-shadow: rgb(161 92 32 / 10%) 0px 0px 0px 1px inset;
    `};
  ${props =>
    (props.status === 'neutral' || props.status === undefined) &&
    css`
      color: rgb(68, 68, 68);
      background: rgb(238, 238, 238);
      box-shadow: rgb(68 68 68 / 10%) 0px 0px 0px 1px inset;
    `};
`;

export {Badge};
