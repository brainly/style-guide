// @flow strict

import React from 'react';
import classnames from 'classnames';
import * as LogoModule from '../logo/Logo';

const {TYPE, BASE_URL, LOGOS} = LogoModule;

const ICONS = {
  brainly: 'brainly-mobile-6879551770',
  eodev: 'eodev-mobile-bfdc46ee89',
  nosdevoirs: 'nosdevoirs-mobile-2caead9ada',
  znanija: 'znanija-mobile-200611d052',
  'brainly-plus': 'brainly-mobile-6879551770',
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
