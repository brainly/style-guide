import * as React from 'react';
import Flex, {FlexPropsType} from '../../flex/Flex';
import classnames from 'classnames';
import type {WithChildren} from './Tab';

type StyleType = Partial<
  React.CSSProperties & {
    '--list-height': string;
    '--border-color': string;
  }
>;

export type TabHeaderProps = WithChildren &
  FlexPropsType & {
    height?: string;
    style?: StyleType;
  };

export const Header = ({
  children,
  height = '48px',
  className,
  style = {'--list-height': height},
  ...rest
}: TabHeaderProps) => (
  <Flex
    as="header"
    {...rest}
    className={classnames('sg-tabs__header', className)}
    style={style}
  >
    {children}
  </Flex>
);
