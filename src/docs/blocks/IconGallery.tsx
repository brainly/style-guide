import * as React from 'react';
import {styled} from '@storybook/theming';
import {Div} from '@storybook/components';

const ItemLabel = styled.div(({theme}) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s3,
  fontWeight: '700',
  color: theme.color.defaultText,
  marginTop: 10,
  lineHeight: 1.2,
  width: 127,
}));
const ItemSpecimen = styled.div(({size = 127}) => ({
  borderRadius: '4px',
  backgroundColor: '#f5f8fa',
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
  alignItems: 'flex-start',
  flex: '0 1 calc(20% - 10px)',
  minWidth: 120,
  margin: '0 10px 30px 0',
});
const List = styled(Div)({
  display: 'flex',
  flexFlow: 'row wrap',
});
interface IconItemProps {
  name: string;
  size: number;
  children: React.ReactNode;
}
export const IconItem = ({name, size, children}: IconItemProps) => (
  <Item>
    <ItemSpecimen size={size}>{children}</ItemSpecimen>
    <ItemLabel>{name}</ItemLabel>
  </Item>
);
interface IconGalleryProps {
  children: React.ReactNode;
}
export const IconGallery = ({children, ...props}: IconGalleryProps) => (
  <List {...props} className="docblock-icongallery">
    {children}
  </List>
);
