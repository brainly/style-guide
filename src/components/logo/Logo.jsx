// @flow strict

import * as React from 'react';
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
  | 'brainly-plus-small'
  | 'brainly-tutoring'
  | 'brainly-tutoring-small'
  | 'brainly-logotype-tutor'
  | 'brainly-logo-tutor'
  | 'brainly-logotype-math-solver'
  | 'brainly-logo-math-solver'
  | 'brainly-logotype-community-qa'
  | 'brainly-logo-community-qa'
  | 'brainly-logotype-textbook-detective'
  | 'brainly-logo-textbook-detective';

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
  BRAINLY_LOGOTYPE_TUTOR: 'brainly-logotype-tutor',
  BRAINLY_LOGO_TUTOR: 'brainly-logo-tutor',
  BRAINLY_LOGOTYPE_MATH_SOLVER: 'brainly-logotype-math-solver',
  BRAINLY_LOGO_MATH_SOLVER: 'brainly-logo-math-solver',
  BRAINLY_LOGOTYPE_COMMUNITY_QA: 'brainly-logotype-community-qa',
  BRAINLY_LOGO_COMMUNITY_QA: 'brainly-logo-community-qa',
  BRAINLY_LOGOTYPE_TEXTBOOK_DETECTIVE: 'brainly-logotype-textbook-detective',
  BRAINLY_LOGO_TEXTBOOK_DETECTIVE: 'brainly-logo-textbook-detective',
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
  BRAINLY_LOGOTYPE_TUTOR: 'brainly-logotype-tutor',
  BRAINLY_LOGO_TUTOR: 'brainly-logo-tutor-small',
  BRAINLY_LOGOTYPE_MATH_SOLVER: 'brainly-logotype-math-solver',
  BRAINLY_LOGO_MATH_SOLVER: 'brainly-logo-math-solver',
  BRAINLY_LOGOTYPE_COMMUNITY_QA: 'brainly-logotype-community-qa',
  BRAINLY_LOGO_COMMUNITY_QA: 'brainly-logo-community-qa',
  BRAINLY_LOGOTYPE_TEXTBOOK_DETECTIVE: 'brainly-logotype-textbook-detective',
  BRAINLY_LOGO_TEXTBOOK_DETECTIVE: 'brainly-logo-textbook-detective',
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
  [TYPE.ZNANIJA_PLUS_SMALL]: 'znanija-plus-small-495ddebd8c',
  [TYPE.BRAINLY_PLUS]: 'brainly-plus-3f4fae7ad9',
  [TYPE.BRAINLY_PLUS_INVERSE]: 'brainly-plus-inverse-c687c7219e',
  [TYPE.BRAINLY_PLUS_SMALL]: 'brainly-plus-small-57d2d0c2e9',
  [TYPE.BRAINLY_TUTORING]: 'brainly-tutoring-94373373cc',
  [TYPE.BRAINLY_TUTORING_SMALL]: 'brainly-tutoring-small-02c148571b',
  [TYPE.BRAINLY_LOGOTYPE_TUTOR]: 'product/brainly-logotype-tutor-426af0340d',
  [TYPE.BRAINLY_LOGO_TUTOR]: 'product/brainly-logo-tutor-53d6052aac',
  [TYPE.BRAINLY_LOGOTYPE_COMMUNITY_QA]:
    'product/brainly-logotype-community-qa-a864b76316',
  [TYPE.BRAINLY_LOGO_COMMUNITY_QA]:
    'product/brainly-logo-community-qa-4f24dc82d9',
  [TYPE.BRAINLY_LOGOTYPE_TEXTBOOK_DETECTIVE]:
    'product/brainly-logotype-textbook-detective-ff526a79b8',
  [TYPE.BRAINLY_LOGO_TEXTBOOK_DETECTIVE]:
    'product/brainly-logo-textbook-detective-5b2274c6a9',
  [TYPE.BRAINLY_LOGOTYPE_MATH_SOLVER]:
    'product/brainly-logotype-math-solver-16a98c8e00',
  [TYPE.BRAINLY_LOGO_MATH_SOLVER]:
    'product/brainly-logo-math-solver-8171e2920a',
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

  const logoPath = `${BASE_URL}${LOGOS[type]}.svg`;

  return (
    <div {...props} className={logoClass}>
      <img className="sg-logo__image" src={logoPath} alt={alt} />
    </div>
  );
};

export default Logo;
