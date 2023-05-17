import * as React from 'react';
import classnames from 'classnames';
import {getLogoUrl} from '../../logo-url';

type HomeButtonLogoTypeType =
  | 'brainly'
  | 'eodev'
  | 'nosdevoirs'
  | 'znanija'
  | 'znanija-plus'
  | 'brainly-plus'
  | 'brainly-tutoring';
const LOGO_TYPE: {
  BRAINLY: 'brainly';
  EODEV: 'eodev';
  NOSDEVOIRS: 'nosdevoirs';
  ZNANIJA: 'znanija';
  ZNANIJA_PLUS: 'znanija-plus';
  BRAINLY_PLUS: 'brainly-plus';
  BRAINLY_TUTORING: 'brainly-tutoring';
} = {
  BRAINLY: 'brainly',
  EODEV: 'eodev',
  NOSDEVOIRS: 'nosdevoirs',
  ZNANIJA: 'znanija',
  ZNANIJA_PLUS: 'znanija-plus',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_TUTORING: 'brainly-tutoring',
};
const ICONS = {
  brainly: 'brainly-mobile',
  eodev: 'eodev-mobile',
  nosdevoirs: 'nosdevoirs-mobile',
  znanija: 'znanija-mobile',
  'znanija-plus': 'znanija-plus-small',
  'brainly-plus': 'brainly-plus',
  'brainly-tutoring': 'brainly-tutoring',
};

export type HomeButtonPropsType = {
  type?: HomeButtonLogoTypeType;
  href?: string;
  className?: string;
  alt?: string;
  'aria-label'?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'type' | 'href' | 'className' | 'alt' | 'undefined'
>;

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
