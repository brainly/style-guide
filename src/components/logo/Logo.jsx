// @flow strict

import React from 'react';
import classnames from 'classnames';

export const BASE_URL = 'https://styleguide.brainly.com/images/logos/';

export type LogoTypeType =
  | 'brainly'
  | 'brainly-mobile'
  | 'brainly-mobile-new'
  | 'eodev'
  | 'eodev-mobile'
  | 'eodev-mobile-new'
  | 'nosdevoirs'
  | 'nosdevoirs-mobile'
  | 'nosdevoirs-mobile-new'
  | 'znanija'
  | 'znanija-mobile'
  | 'znanija-mobile-new'
  | 'znanija-plus'
  | 'znanija-plus-inverse'
  | 'znanija-plus-small'
  | 'brainly-plus'
  | 'brainly-plus-inverse'
  | 'brainly-plus-small';

export const TYPE = {
  BRAINLY: 'brainly',
  BRAINLY_MOBILE: 'brainly-mobile',
  BRAINLY_MOBILE_NEW: 'brainly-mobile-new',
  EODEV: 'eodev',
  EODEV_MOBILE: 'eodev-mobile',
  EODEV_MOBILE_NEW: 'eodev-mobile-new',
  NOSDEVOIRS: 'nosdevoirs',
  NOSDEVOIRS_MOBILE: 'nosdevoirs-mobile',
  NOSDEVOIRS_MOBILE_NEW: 'nosdevoirs-mobile-new',
  ZNANIJA: 'znanija',
  ZNANIJA_MOBILE: 'znanija-mobile',
  ZNANIJA_MOBILE_NEW: 'znanija-mobile-new',
  ZNANIJA_PLUS: 'znanija-plus',
  ZNANIJA_PLUS_INVERSE: 'znanija-plus-inverse',
  ZNANIJA_PLUS_SMALL: 'znanija-plus-small',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_PLUS_INVERSE: 'brainly-plus-inverse',
  BRAINLY_PLUS_SMALL: 'brainly-plus-small',
};

export const LOGOS = {
  [TYPE.BRAINLY]: 'brainly-761d75d6ea',
  [TYPE.BRAINLY_MOBILE]: 'brainly-mobile-d9f7a24c8b',
  [TYPE.BRAINLY_MOBILE_NEW]: 'brainly-mobile-new-6879551770',
  [TYPE.EODEV]: 'eodev-1972bd4349',
  [TYPE.EODEV_MOBILE]: 'eodev-mobile-a894b42b65',
  [TYPE.EODEV_MOBILE_NEW]: 'eodev-mobile-new-bfdc46ee89',
  [TYPE.NOSDEVOIRS]: 'nosdevoirs-e2d5d17215',
  [TYPE.NOSDEVOIRS_MOBILE]: 'nosdevoirs-mobile-cd96d092ee',
  [TYPE.NOSDEVOIRS_MOBILE_NEW]: 'nosdevoirs-mobile-new-2caead9ada',
  [TYPE.ZNANIJA]: 'znanija-addd85e6f5',
  [TYPE.ZNANIJA_MOBILE]: 'znanija-mobile-edc9d3d14f',
  [TYPE.ZNANIJA_MOBILE_NEW]: 'znanija-mobile-new-200611d052',
  [TYPE.ZNANIJA_PLUS]: 'znanija-plus-e62f1437d9',
  [TYPE.ZNANIJA_PLUS_INVERSE]: 'znanija-plus-inverse-106aa465e9',
  [TYPE.ZNANIJA_PLUS_SMALL]: 'znanija-plus-small-edf813672e',
  [TYPE.BRAINLY_PLUS]: 'brainly-plus-42debebd42',
  [TYPE.BRAINLY_PLUS_INVERSE]: 'brainly-plus-inverse-b9b5efbf59',
  [TYPE.BRAINLY_PLUS_SMALL]: 'brainly-plus-small-9dd3b24a28',
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
