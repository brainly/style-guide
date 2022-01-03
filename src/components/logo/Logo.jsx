// @flow strict

import * as React from 'react';
import classnames from 'classnames';
import {getLogoUrl} from '../../logo-url';

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
  | 'brainly-plus-small'
  | 'brainly-tutoring'
  | 'brainly-tutoring-small'
  | 'brainly-logotype-tutor'
  | 'logo-tutor'
  | 'logo-math-solver'
  | 'logo-community-qa'
  | 'logo-textbook-detective'
  | 'brainly-logotype-math-solver'
  | 'brainly-logotype-community-qa'
  | 'brainly-logotype-textbook-detective';

export const TYPE: {
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
  BRAINLY_TUTORING: 'brainly-tutoring',
  BRAINLY_TUTORING_SMALL: 'brainly-tutoring-small',
  LOGO_TUTOR: 'logo-tutor',
  LOGO_MATH_SOLVER: 'logo-math-solver',
  LOGO_COMMUNITY_QA: 'logo-community-qa',
  LOGO_TEXTBOOK_DETECTIVE: 'logo-textbook-detective',
  BRAINLY_LOGOTYPE_TUTOR: 'brainly-logotype-tutor',
  BRAINLY_LOGOTYPE_MATH_SOLVER: 'brainly-logotype-math-solver',
  BRAINLY_LOGOTYPE_COMMUNITY_QA: 'brainly-logotype-community-qa',
  BRAINLY_LOGOTYPE_TEXTBOOK_DETECTIVE: 'brainly-logotype-textbook-detective',
} = {
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
  BRAINLY_TUTORING: 'brainly-tutoring',
  BRAINLY_TUTORING_SMALL: 'brainly-tutoring-small',
  LOGO_TUTOR: 'logo-tutor',
  LOGO_MATH_SOLVER: 'logo-math-solver',
  LOGO_COMMUNITY_QA: 'logo-community-qa',
  LOGO_TEXTBOOK_DETECTIVE: 'logo-textbook-detective',
  BRAINLY_LOGOTYPE_TUTOR: 'brainly-logotype-tutor',
  BRAINLY_LOGOTYPE_MATH_SOLVER: 'brainly-logotype-math-solver',
  BRAINLY_LOGOTYPE_COMMUNITY_QA: 'brainly-logotype-community-qa',
  BRAINLY_LOGOTYPE_TEXTBOOK_DETECTIVE: 'brainly-logotype-textbook-detective',
};

export type LogoPropsType = {
  className?: string,
  type?: LogoTypeType,
  alt?: string,
  ...
};

const Logo = ({
  type = TYPE.BRAINLY,
  className,
  alt,
  ...props
}: LogoPropsType) => {
  const logoClass = classnames(
    'sg-logo',
    {
      [`sg-logo--${type}`]: type !== TYPE.BRAINLY,
    },
    className
  );
  const logoPath = `${getLogoUrl(type)}`;

  return (
    <div {...props} className={logoClass}>
      <img className="sg-logo__image" src={logoPath} alt={alt} />
    </div>
  );
};

export default Logo;
