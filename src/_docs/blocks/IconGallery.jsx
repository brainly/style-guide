// @flow

import React from 'react';
import type {Node} from 'react';
import {styled} from '@storybook/theming';
import {ResetWrapper} from '@storybook/components/dist/typography/DocumentFormatting';

import {getBlockBackgroundStyle} from '@storybook/components/dist/blocks/BlockBackgroundStyles';

const ItemLabel = styled.div(({theme}) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s1,
  fontWeight: 'bold',
  color: theme.color.defaultText,
  marginTop: 10,
  lineHeight: 1.2,
}));

const ItemSpecimen = styled.div(({size = 108}) => ({
  borderRadius: '4px',
  backgroundColor: '#fafafa',
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
  flexDirection: 'column',
  alignItems: 'center',
  flex: '0 1 calc(20% - 10px)',
  minWidth: 120,
  margin: '0 10px 30px 0',
});

const List = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
});

interface IconItemProps {
  name: string;
  size: number;
  children: Node;
}

export const IconItem = ({name, size, children}: IconItemProps) => (
  <Item>
    <ItemSpecimen size={size}>{children}</ItemSpecimen>
    <ItemLabel>{name}</ItemLabel>
  </Item>
);

interface IconGalleryProps {
  children: Node;
}

export const IconGallery = ({children, ...props}: IconGalleryProps) => (
  <ResetWrapper>
    <List {...props} className="docblock-icongallery">
      {children}
    </List>
  </ResetWrapper>
);
