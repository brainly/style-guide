import * as React from 'react';
import Flex, {FlexPropsType} from '../../flex/Flex';
import classnames from 'classnames';
import type {WithChildren} from './Tab';

export type TabHeaderProps = WithChildren &
  FlexPropsType & {
    height?: string;
  };

export const Header = ({
  children,
  height = '48px',
  className,
  ...rest
}: TabHeaderProps) => (
  <Flex
    as="header"
    {...rest}
    className={classnames('sg-tabs__header', className)}
    style={{'--list-height': height} as React.CSSProperties}
  >
    {children}
  </Flex>
);
