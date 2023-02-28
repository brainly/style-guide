import * as React from 'react';
import Flex, {FlexPropsType} from '../../flex/Flex';
import classnames from 'classnames';
import type {WithChildren} from './Tab';

export type TabListProps = WithChildren & FlexPropsType;
export const List = ({children, className, ...rest}: TabListProps) => (
  <Flex
    as="ul"
    {...rest}
    className={classnames('sg-tabs__list', className)}
    role="tablist"
  >
    {children}
  </Flex>
);
