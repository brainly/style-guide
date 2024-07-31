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
  | 'artmusic'
  | 'astronomy'
  | 'belarus'
  | 'belarus-alt'
  | 'biology'
  | 'business'
  | 'catala'
  | 'chemistry'
  | 'chinese'
  | 'economics'
  | 'egzam'
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
  | 'kazach-alt'
  | 'kyrgyz'
  | 'language'
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
  | 'russian-alt'
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
  | 'ukrainian-alt'
  | 'ukrainian-literature'
  | 'uzbek'
  | 'wos';
export type SizeType = 'small' | 'medium' | 'normal';

export const TYPE = {
  ACCOUNTANCY: 'accountancy',
  ADMINISTRATION: 'administration',
  ALGEBRA: 'algebra',
  ALL: 'all',
  ARABIC: 'arabic',
  ART: 'art',
  ARTMUSIC: 'artmusic',
  ASTRONOMY: 'astronomy',
  BELARUS: 'belarus',
  BELARUS_ALT: 'belarus-alt',
  BIOLOGY: 'biology',
  BUSINESS: 'business',
  CATALA: 'catala',
  CHEMISTRY: 'chemistry',
  CHINESE: 'chinese',
  ECONOMICS: 'economics',
  EGZAM: 'egzam',
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
  KAZACH_ALT: 'kazach-alt',
  KYRGYZ: 'kyrgyz',
  LANGUAGE: 'language',
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
  RUSSIAN_ALT: 'russian-alt',
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
  UKRAINIAN_ALT: 'ukrainian-alt',
  UKRAINIAN_LITERATURE: 'ukrainian-literature',
  UZBEK: 'uzbek',
  WOS: 'wos',
} as const;

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal',
} as const;

export type SubjectIconPropsType = {
  className?: string;
  type: IconTypeType;
  size?: SizeType;
  monoColor?: IconColorType;
  title?: string;
} & Omit<
  React.SVGProps<SVGSVGElement>,
  'className' | 'type' | 'size' | 'monoColor' | 'title'
>;

const SubjectIcon = ({
  type,
  size = SIZE.NORMAL,
  monoColor,
  className,
  title,
  ...props
}: SubjectIconPropsType) => {
  const id = React.useId();
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
  const titleId = `sg-math-symbol-icon-${type}-title-${id}`;
  const defaultTitle = type.replace(/-alt$/g, '').replace(/-/g, ' ');

  return (
    <svg {...props} className={iconClass} aria-labelledby={titleId} role="img">
      <text id={titleId} visibility="hidden">
        {title || defaultTitle}
      </text>
      <use xlinkHref={iconType} aria-hidden="true" />
    </svg>
  );
};

export default SubjectIcon;
export {ICON_COLOR} from '../icons/Icon';
