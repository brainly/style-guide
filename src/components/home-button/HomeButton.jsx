// @flow strict

import React from 'react';
import classnames from 'classnames';
import * as LogoModule from '../logo/Logo';

const {TYPE, BASE_URL, LOGOS} = LogoModule;

const ICONS = {
  brainly: 'brainly-mobile-426ef8718f',
  eodev: 'eodev-mobile-b3319881d5',
  nosdevoirs: 'nosdevoirs-mobile-0920e17308',
  znanija: 'znanija-mobile-4b7ac3cb04',
  'brainly-plus': 'brainly-plus-9dd3b24a28',
};

type PropsType = {
  type?: LogoModule.LogoTypeType,
  href?: string,
  className?: string,
  ...
};

const HomeButton = ({
  type = TYPE.BRAINLY,
  href = '#',
  className,
  ...props
}: PropsType) => {
  const buttonClass = classnames(
    'sg-home-button',
    {
      [`sg-home-button--${type}`]: type !== TYPE.BRAINLY,
    },
    className
  );
  const logoPath = `${BASE_URL}${LOGOS[type]}.svg`;
  // $FlowFixMe - some icons are missing, we will investigate why
  const mobilePath = `${BASE_URL}${ICONS[type]}.svg`;

  return (
    <a {...props} href={href} className={buttonClass}>
      <img className="sg-home-button__logo-small" src={mobilePath} />
      <img className="sg-home-button__logo-big" src={logoPath} />
    </a>
  );
};

export default HomeButton;
export {TYPE};
