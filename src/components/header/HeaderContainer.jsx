// @flow strict
import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type PropsType = {
  children: Node,
  light?: boolean,
  className?: string
};

const HeaderContainer = ({children, light, className, ...props}: PropsType) => {

  const headerContainerClass = classnames('sg-header__container', {
    'sg-header__container--light': light
  }, className);

  return (
    <div {...props} className={headerContainerClass}>
      {children}
    </div>
  );
};

export default HeaderContainer;
