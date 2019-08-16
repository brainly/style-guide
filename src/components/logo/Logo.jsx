// @flow strict

import React from 'react';
import classnames from 'classnames';

export const BASE_URL = 'https://styleguide.brainly.com/images/logos/';

export type LogoTypeType =
  | 'brainly'
  | 'eodev'
  | 'nosdevoirs'
  | 'znanija'
  | 'znanija-plus'
  | 'znanija-plus-inverse'
  | 'znanija-plus-small'
  | 'brainly-plus'
  | 'brainly-plus-inverse'
  | 'brainly-plus-small';

export const TYPE = {
  BRAINLY: 'brainly',
  EODEV: 'eodev',
  NOSDEVOIRS: 'nosdevoirs',
  ZNANIJA: 'znanija',
  ZNANIJA_PLUS: 'znanija-plus',
  ZNANIJA_PLUS_INVERSE: 'znanija-plus-inverse',
  ZNANIJA_PLUS_SMALL: 'znanija-plus-small',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_PLUS_INVERSE: 'brainly-plus-inverse',
  BRAINLY_PLUS_SMALL: 'brainly-plus-small',
};

export const LOGOS = {
  [TYPE.BRAINLY]: 'brainly-761d75d6ea',
  [TYPE.EODEV]: 'eodev-1972bd4349',
  [TYPE.NOSDEVOIRS]: 'nosdevoirs-e2d5d17215',
  [TYPE.ZNANIJA]: 'znanija-addd85e6f5',
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
