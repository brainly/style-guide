import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ICON_COLOR} from '../icons/Icon';

export const TYPE = {
  ACCOUNTANCY: 'accountancy',
  ADMINISTRATION: 'administration',
  AGRICULTURAL: 'agricultural',
  ALGEBRA: 'algebra',
  ALL: 'all',
  ARABIC: 'arabic',
  ART: 'art',
  ARTMUSIC: 'artmusic',
  BELARUS: 'belarus',
  BELARUS_ALT: 'belarus-alt',
  BIOLOGY: 'biology',
  BUSINESS: 'business',
  CATALA: 'catala',
  CHEMISTRY: 'chemistry',
  CHINESE: 'chinese',
  ECONOMICS: 'economics',
  EGZAM: 'egzam',
  ENGLISH: 'english',
  ENTREPRENEURSHIP: 'entrepreneurship',
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
  KOREAN: 'korean',
  LANGUAGE: 'language',
  LATIN: 'latin',
  LAW: 'law',
  LIFE_SCIENCE: 'life-science',
  LITERATURE: 'literature',
  LOGIC: 'logic',
  MATHEMATICS: 'mathematics',
  MUSIC: 'music',
  NIGERIAN_LANG: 'nigerian-lang',
  OTHERLANGUAGES: 'otherlanguages',
  OTHERS: 'others',
  PEDAGOGICS: 'pedagogics',
  PHILOSOPHY: 'philosophy',
  PHYSICAL_EDUCATION: 'physical-education',
  PHYSICS: 'physics',
  POLITICS: 'politics',
  PSYCHOLOGY: 'psychology',
  RELIGION: 'religion',
  RPA_LANG: 'rpa-lang',
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
  UKRAINIAN: 'ukrainian',
  UKRAINIAN_ALT: 'ukrainian-alt',
  UKRAINIAN_LITERATURE: 'ukrainian-literature',
  WOS: 'wos'
};

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal'
};

const SubjectIcon = ({type, size = SIZE.NORMAL, monoColor, className, ...props}) => {
  const iconClass = classNames('sg-subject-icon', {
    [`sg-subject-icon--${size}`]: size !== SIZE.NORMAL,
    [`sg-subject-icon--${monoColor}`]: monoColor !== ICON_COLOR.LIGHT && monoColor !== undefined
  }, className);
  const iconType = `#icon-subject-${monoColor ? 'mono-' : ''}${type}`;

  return (
    <svg {...props} className={iconClass}>
      <use xlinkHref={iconType}></use>
    </svg>
  );
};

SubjectIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
  monoColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  className: PropTypes.string
};

export default SubjectIcon;
export {ICON_COLOR};
