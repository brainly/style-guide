// @flow strict

import * as React from 'react';
import classNames from 'classnames';
import type {IconColorType} from '../icons/Icon';
import {ICON_COLOR} from '../icons/Icon';

export type IconTypeType =
  | 'accountancy'
  | 'administration'
  | 'algebra'
  | 'all'
  | 'arabic'
  | 'art'
  | 'astronomy'
  | 'belarus'
  | 'biology'
  | 'business'
  | 'catala'
  | 'chemistry'
  | 'chinese'
  | 'economics'
  | 'exam'
  | 'english'
  | 'environment'
  | 'ethics'
  | 'euskara'
  | 'first-aid'
  | 'french'
  | 'galego'
  | 'geography'
  | 'geology'
  | 'geometry'
  | 'german'
  | 'grammar'
  | 'health'
  | 'history'
  | 'india-lang'
  | 'indonesian-lang'
  | 'informatics'
  | 'italian'
  | 'japanese'
  | 'kazach'
  | 'kyrgyz'
  | 'latin'
  | 'law'
  | 'life-science'
  | 'literature'
  | 'logic'
  | 'mathematics'
  | 'music'
  | 'otherlanguages'
  | 'others'
  | 'pedagogics'
  | 'philosophy'
  | 'physical-education'
  | 'physics'
  | 'politics'
  | 'psychology'
  | 'religion'
  | 'russian'
  | 'science'
  | 'security'
  | 'skills'
  | 'social-science'
  | 'sociology'
  | 'spanish'
  | 'statistics'
  | 'technology'
  | 'tourism'
  | 'traffic'
  | 'turkish'
  | 'ukrainian'
  | 'ukrainian-literature'
  | 'uzbek';

export type SizeType = 'small' | 'medium' | 'normal';

export const TYPE: {
  ACCOUNTANCY: 'accountancy',
  ADMINISTRATION: 'administration',
  ALGEBRA: 'algebra',
  ALL: 'all',
  ARABIC: 'arabic',
  ART: 'art',
  ASTRONOMY: 'astronomy',
  BELARUS: 'belarus',
  BIOLOGY: 'biology',
  BUSINESS: 'business',
  CATALA: 'catala',
  CHEMISTRY: 'chemistry',
  CHINESE: 'chinese',
  ECONOMICS: 'economics',
  EXAM: 'exam',
  ENGLISH: 'english',
  ENVIRONMENT: 'environment',
  ETHICS: 'ethics',
  EUSKARA: 'euskara',
  FIRST_AID: 'first-aid',
  FRENCH: 'french',
  GALEGO: 'galego',
  GEOGRAPHY: 'geography',
  GEOLOGY: 'geology',
  GEOMETRY: 'geometry',
  GERMAN: 'german',
  GRAMMAR: 'grammar',
  HEALTH: 'health',
  HISTORY: 'history',
  INDIA_LANG: 'india-lang',
  INDONESIAN_LANG: 'indonesian-lang',
  INFORMATICS: 'informatics',
  ITALIAN: 'italian',
  JAPANESE: 'japanese',
  KAZACH: 'kazach',
  KYRGYZ: 'kyrgyz',
  LATIN: 'latin',
  LAW: 'law',
  LIFE_SCIENCE: 'life-science',
  LITERATURE: 'literature',
  LOGIC: 'logic',
  MATHEMATICS: 'mathematics',
  MUSIC: 'music',
  OTHERLANGUAGES: 'otherlanguages',
  OTHERS: 'others',
  PEDAGOGICS: 'pedagogics',
  PHILOSOPHY: 'philosophy',
  PHYSICAL_EDUCATION: 'physical-education',
  PHYSICS: 'physics',
  POLITICS: 'politics',
  PSYCHOLOGY: 'psychology',
  RELIGION: 'religion',
  RUSSIAN: 'russian',
  SCIENCE: 'science',
  SECURITY: 'security',
  SKILLS: 'skills',
  SOCIAL_SCIENCE: 'social-science',
  SOCIOLOGY: 'sociology',
  SPANISH: 'spanish',
  STATISTICS: 'statistics',
  TECHNOLOGY: 'technology',
  TOURISM: 'tourism',
  TRAFFIC: 'traffic',
  TURKISH: 'turkish',
  UKRAINIAN: 'ukrainian',
  UKRAINIAN_LITERATURE: 'ukrainian-literature',
  UZBEK: 'uzbek',
} = {
  ACCOUNTANCY: 'accountancy',
  ADMINISTRATION: 'administration',
  ALGEBRA: 'algebra',
  ALL: 'all',
  ARABIC: 'arabic',
  ART: 'art',
  ASTRONOMY: 'astronomy',
  BELARUS: 'belarus',
  BIOLOGY: 'biology',
  BUSINESS: 'business',
  CATALA: 'catala',
  CHEMISTRY: 'chemistry',
  CHINESE: 'chinese',
  ECONOMICS: 'economics',
  EXAM: 'exam',
  ENGLISH: 'english',
  ENVIRONMENT: 'environment',
  ETHICS: 'ethics',
  EUSKARA: 'euskara',
  FIRST_AID: 'first-aid',
  FRENCH: 'french',
  GALEGO: 'galego',
  GEOGRAPHY: 'geography',
  GEOLOGY: 'geology',
  GEOMETRY: 'geometry',
  GERMAN: 'german',
  GRAMMAR: 'grammar',
  HEALTH: 'health',
  HISTORY: 'history',
  INDIA_LANG: 'india-lang',
  INDONESIAN_LANG: 'indonesian-lang',
  INFORMATICS: 'informatics',
  ITALIAN: 'italian',
  JAPANESE: 'japanese',
  KAZACH: 'kazach',
  KYRGYZ: 'kyrgyz',
  LATIN: 'latin',
  LAW: 'law',
  LIFE_SCIENCE: 'life-science',
  LITERATURE: 'literature',
  LOGIC: 'logic',
  MATHEMATICS: 'mathematics',
  MUSIC: 'music',
  OTHERLANGUAGES: 'otherlanguages',
  OTHERS: 'others',
  PEDAGOGICS: 'pedagogics',
  PHILOSOPHY: 'philosophy',
  PHYSICAL_EDUCATION: 'physical-education',
  PHYSICS: 'physics',
  POLITICS: 'politics',
  PSYCHOLOGY: 'psychology',
  RELIGION: 'religion',
  RUSSIAN: 'russian',
  SCIENCE: 'science',
  SECURITY: 'security',
  SKILLS: 'skills',
  SOCIAL_SCIENCE: 'social-science',
  SOCIOLOGY: 'sociology',
  SPANISH: 'spanish',
  STATISTICS: 'statistics',
  TECHNOLOGY: 'technology',
  TOURISM: 'tourism',
  TRAFFIC: 'traffic',
  TURKISH: 'turkish',
  UKRAINIAN: 'ukrainian',
  UKRAINIAN_LITERATURE: 'ukrainian-literature',
  UZBEK: 'uzbek',
};

export const SIZE: {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal',
} = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal',
};

export type SubjectIconPropsType = {
  className?: string,
  type: IconTypeType,
  size?: SizeType,
  monoColor?: IconColorType,
  title?: string,
  ...
};

const SubjectIcon = ({
  type,
  size = SIZE.NORMAL,
  monoColor,
  className,
  title,
  ...props
}: SubjectIconPropsType) => {
  const iconClass = classNames(
    'sg-subject-icon',
    {
      [`sg-subject-icon--${size}`]: size !== SIZE.NORMAL,
      [`sg-subject-icon--${String(monoColor)}`]:
        monoColor !== ICON_COLOR['icon-white'] && monoColor !== undefined,
    },
    className
  );
  const iconType = `#icon-subject-${monoColor ? 'mono-' : ''}${type}`;
  const titleId = `sg-math-symbol-icon-${type}-title`;
  const defaultTitle = type.replace(/-alt$/g, '').replace(/-/g, ' ');

  return (
    <svg {...props} className={iconClass} aria-labelledby={titleId} role="img">
      <text id={titleId} hidden>
        {title || defaultTitle}
      </text>
      <use xlinkHref={iconType} aria-hidden="true" />
    </svg>
  );
};

export default SubjectIcon;
export {ICON_COLOR} from '../icons/Icon';
