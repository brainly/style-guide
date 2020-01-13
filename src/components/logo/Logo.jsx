// @flow strict

import React from 'react';
import classnames from 'classnames';

export const BASE_URL = 'https://styleguide.brainly.com/images/logos/';

export type LogoTypeType =
  | 'brainly'
  | 'brainly-mobile'
  | 'eodev'
  | 'eodev-mobile'
  | 'nosdevoirs'
  | 'nosdevoirs-mobile'
  | 'znanija'
  | 'znanija-mobile'
  | 'znanija-plus'
  | 'znanija-plus-inverse'
  | 'znanija-plus-small'
  | 'brainly-plus'
  | 'brainly-plus-inverse'
  | 'brainly-plus-small';

export const TYPE = {
  BRAINLY: 'brainly',
  BRAINLY_MOBILE: 'brainly-mobile',
  EODEV: 'eodev',
  EODEV_MOBILE: 'eodev-mobile',
  NOSDEVOIRS: 'nosdevoirs',
  NOSDEVOIRS_MOBILE: 'nosdevoirs-mobile',
  ZNANIJA: 'znanija',
  ZNANIJA_MOBILE: 'znanija-mobile',
  ZNANIJA_PLUS: 'znanija-plus',
  ZNANIJA_PLUS_INVERSE: 'znanija-plus-inverse',
  ZNANIJA_PLUS_SMALL: 'znanija-plus-small',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_PLUS_INVERSE: 'brainly-plus-inverse',
  BRAINLY_PLUS_SMALL: 'brainly-plus-small',
};

export const LOGOS = {
  [TYPE.BRAINLY]: 'brainly-5c4a769505',
  [TYPE.BRAINLY_MOBILE]: 'brainly-mobile-6879551770',
  [TYPE.EODEV]: 'eodev-1972bd4349',
  [TYPE.EODEV_MOBILE]: 'eodev-mobile-bfdc46ee89',
  [TYPE.NOSDEVOIRS]: 'nosdevoirs-e2d5d17215',
  [TYPE.NOSDEVOIRS_MOBILE]: 'nosdevoirs-mobile-2caead9ada',
  [TYPE.ZNANIJA]: 'znanija-addd85e6f5',
  [TYPE.ZNANIJA_MOBILE]: 'znanija-mobile-200611d052',
  [TYPE.ZNANIJA_PLUS]: 'znanija-plus-337423fa26',
  [TYPE.ZNANIJA_PLUS_INVERSE]: 'znanija-plus-inverse-fdb3d35877',
  [TYPE.ZNANIJA_PLUS_SMALL]: 'znanija-plus-small-edf813672e',
  [TYPE.BRAINLY_PLUS]: 'brainly-plus-0768e10846',
  [TYPE.BRAINLY_PLUS_INVERSE]: 'brainly-plus-inverse-6406c85190',
  [TYPE.BRAINLY_PLUS_SMALL]: 'brainly-plus-small-495ddebd8c',
};

type PropsType = {
  className?: string,
  type?: LogoTypeType,
  ...
};

const Logo = ({type = TYPE.BRAINLY, className, ...props}: PropsType) => {
  const logoClass = classnames(
    'sg-logo',
    {
      [`sg-logo--${type}`]: type !== TYPE.BRAINLY,
    },
    className
  );

  const logoPath = `${BASE_URL}${LOGOS[type]}.svg`;

  return (
    <div {...props} className={logoClass}>
      <img className="sg-logo__image" src={logoPath} />
    </div>
  );
};

export default Logo;
