// @flow strict

import * as React from 'react';
import classnames from 'classnames';
import {getLogoUrl} from '../../logo-url';

type HomeButtonLogoTypeType = {
  BRAINLY: 'brainly',
  EODEV: 'eodev',
  NOSDEVOIRS: 'nosdevoirs',
  ZNANIJA: 'znanija',
  BRAINLY_PLUS: 'brainly-plus',
};

const LOGO_TYPE = {
  BRAINLY: 'brainly',
  EODEV: 'eodev',
  NOSDEVOIRS: 'nosdevoirs',
  ZNANIJA: 'znanija',
  BRAINLY_PLUS: 'brainly-plus',
};

const ICONS = {
  brainly: 'brainly-mobile',
  eodev: 'eodev-mobile',
  nosdevoirs: 'nosdevoirs-mobile',
  znanija: 'znanija-mobile',
  'brainly-plus': 'brainly-plus',
};

export type HomeButtonPropsType = {
  type?: HomeButtonLogoTypeType,
  href?: string,
  className?: string,
  alt?: string,
  'aria-label'?: string,
  ...
};

const HomeButton = ({
  type = LOGO_TYPE.BRAINLY,
  href = '#',
  className,
  alt = '',
  'aria-label': ariaLabel,
  ...props
}: HomeButtonPropsType) => {
  const buttonClass = classnames(
    'sg-home-button',
    {
      [`sg-home-button--${type}`]: type !== LOGO_TYPE.BRAINLY,
    },
    className
  );
  const logoPath = `${getLogoUrl(type)}`;
  const mobilePath = `${getLogoUrl(ICONS[type])}`;

  const defaultAriaLabel = `${type.replace(/-/g, ' ')} home`;

  return (
    <a
      {...props}
      href={href}
      className={buttonClass}
      aria-label={ariaLabel || defaultAriaLabel}
    >
      <img className="sg-home-button__logo-small" src={mobilePath} alt={alt} />
      <img className="sg-home-button__logo-big" src={logoPath} alt={alt} />
    </a>
  );
};

export default HomeButton;
export const TYPE = LOGO_TYPE;
