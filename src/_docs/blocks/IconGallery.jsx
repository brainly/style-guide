// @flow

import React from 'react';
import type {Node} from 'react';
import {styled} from '@storybook/theming';
import {ResetWrapper} from '@storybook/components/dist/typography/DocumentFormatting';

import {getBlockBackgroundStyle} from '@storybook/components/dist/blocks/BlockBackgroundStyles';

const ItemLabel = styled.div(({theme}) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s2,
  color: theme.color.defaultText,
  marginLeft: 10,
  lineHeight: 1.2,
}));

const ItemSpecimen = styled.div(({theme, size = 40}) => ({
  ...getBlockBackgroundStyle(theme),
  overflow: 'hidden',
  height: size,
  width: size,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 'none',
}));

const Item = styled.div({
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  flex: '0 1 calc(20% - 10px)',
  minWidth: 120,

  margin: '0px 10px 30px 0',
});

const List = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
});

interface IconItemProps {
  name: string;
}

/**
 * An individual icon with a caption and an example (passed as `children`).
 */
export const IconItem = ({name, size, children}: IconItemProps) => (
  <Item>
    <ItemSpecimen size={size}>{children}</ItemSpecimen>
    <ItemLabel>{name}</ItemLabel>
  </Item>
);

interface IconGalleryProps {
  children: Node;
}

/**
 * Show a grid of icons, as specified by `IconItem`.
 */
export const IconGallery = ({children, ...props}: IconGalleryProps) => (
  <ResetWrapper>
    <List {...props} className="docblock-icongallery">
      {children}
    </List>
  </ResetWrapper>
);
