// @flow strict

import * as React from 'react';
import classnames from 'classnames';
import type {LogoTypeType} from '../logo/Logo';
import {TYPE, BASE_URL, LOGOS} from '../logo/Logo';

const ICONS = {
  brainly: 'brainly-mobile-6879551770',
  eodev: 'eodev-mobile-bfdc46ee89',
  nosdevoirs: 'nosdevoirs-mobile-2caead9ada',
  znanija: 'znanija-mobile-200611d052',
  'brainly-plus': 'brainly-plus-9dd3b24a28',
};

export type HomeButtonPropsType = {
  type?: LogoTypeType,
  href?: string,
  className?: string,
  altTag?: string,
  ...
};

const HomeButton = ({
  type = TYPE.BRAINLY,
  href = '#',
  className,
  altTag,
  ...props
}: HomeButtonPropsType) => {
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
      <img
        className="sg-home-button__logo-small"
        src={mobilePath}
        alt={altTag}
      />
      <img className="sg-home-button__logo-big" src={logoPath} alt={altTag} />
    </a>
  );
};

export default HomeButton;
export {TYPE};
