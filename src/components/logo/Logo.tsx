import * as React from 'react';
import classnames from 'classnames';
import {getLogoUrl} from '../../logo-url';

export type LogoTypeType =
  | 'brainly'
  | 'brainly-inverse'
  | 'brainly-mobile'
  | 'brainly-mobile-inverse'
  | 'eodev'
  | 'eodev-inverse'
  | 'eodev-mobile'
  | 'eodev-mobile-inverse'
  | 'nosdevoirs'
  | 'nosdevoirs-inverse'
  | 'nosdevoirs-mobile'
  | 'nosdevoirs-mobile-inverse'
  | 'znanija'
  | 'znanija-inverse'
  | 'znanija-mobile'
  | 'znanija-mobile-inverse'
  | 'znanija-plus'
  | 'znanija-plus-inverse'
  | 'znanija-plus-small'
  | 'brainly-plus'
  | 'brainly-plus-inverse'
  | 'brainly-tutoring'
  | 'brainly-tutoring-inverse'
  | 'brainly-logotype-tutor'
  | 'logo-tutor'
  | 'logo-math-solver'
  | 'logo-community-qa'
  | 'logo-textbook-detective'
  | 'brainly-logotype-math-solver'
  | 'brainly-logotype-community-qa'
  | 'brainly-logotype-textbook-detective';

export const TYPE = {
  BRAINLY: 'brainly',
  BRAINLY_INVERSE: 'brainly-inverse',
  BRAINLY_MOBILE: 'brainly-mobile',
  BRAINLY_MOBILE_INVERSE: 'brainly-mobile-inverse',
  EODEV: 'eodev',
  EODEV_INVERSE: 'eodev-inverse',
  EODEV_MOBILE: 'eodev-mobile',
  EODEV_MOBILE_INVERSE: 'eodev-mobile-inverse',
  NOSDEVOIRS: 'nosdevoirs',
  NOSDEVOIRS_INVERSE: 'nosdevoirs-inverse',
  NOSDEVOIRS_MOBILE: 'nosdevoirs-mobile',
  NOSDEVOIRS_MOBILE_INVERSE: 'nosdevoirs-mobile-inverse',
  ZNANIJA: 'znanija',
  ZNANIJA_INVERSE: 'znanija-inverse',
  ZNANIJA_MOBILE: 'znanija-mobile',
  ZNANIJA_MOBILE_INVERSE: 'znanija-mobile-inverse',
  ZNANIJA_PLUS: 'znanija-plus',
  ZNANIJA_PLUS_INVERSE: 'znanija-plus-inverse',
  ZNANIJA_PLUS_SMALL: 'znanija-plus-small',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_PLUS_INVERSE: 'brainly-plus-inverse',
  BRAINLY_TUTORING: 'brainly-tutoring',
  BRAINLY_TUTORING_INVERSE: 'brainly-tutoring-inverse',
  LOGO_TUTOR: 'logo-tutor',
  LOGO_MATH_SOLVER: 'logo-math-solver',
  LOGO_COMMUNITY_QA: 'logo-community-qa',
  LOGO_TEXTBOOK_DETECTIVE: 'logo-textbook-detective',
  BRAINLY_LOGOTYPE_TUTOR: 'brainly-logotype-tutor',
  BRAINLY_LOGOTYPE_MATH_SOLVER: 'brainly-logotype-math-solver',
  BRAINLY_LOGOTYPE_COMMUNITY_QA: 'brainly-logotype-community-qa',
  BRAINLY_LOGOTYPE_TEXTBOOK_DETECTIVE: 'brainly-logotype-textbook-detective',
} as const;

function getDefaultAlt(type: LogoTypeType) {
  const replacers = [
    {
      regexp: /-mobile/g,
      newSubstr: '',
    },
    {
      regexp: /-inverse/g,
      newSubstr: '',
    },
    {
      regexp: /-small/g,
      newSubstr: '',
    },
    {
      regexp: /-logotype-/g,
      newSubstr: ' ',
    },
    {
      regexp: /logo-/g,
      newSubstr: '',
    },
    {
      regexp: /-/g,
      newSubstr: ' ',
    },
  ];

  return replacers.reduce(
    // @ts-ignore TS2769
    (alt, {regexp, newSubstr}) => alt.replace(regexp, newSubstr),
    type
  );
}

export type LogoPropsType = {
  className?: string;
  type?: LogoTypeType;
  alt?: string;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'className' | 'type' | 'alt'>;

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
  const defaultAlt = getDefaultAlt(type);

  return (
    <div {...props} className={logoClass} data-logotype={type}>
      {/*
       // @ts-ignore TS2322 */}
      <img className="sg-logo__image" src={logoPath} alt={alt ?? defaultAlt} />
    </div>
  );
};

export default Logo;
