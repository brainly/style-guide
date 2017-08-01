import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  ACCOUNTANCY: 'accountancy',
  ADMINISTRATION: 'administration',
  AGRICULTURAL: 'agricultural',
  ALGEBRA: 'algebra',
  ALL: 'all',
  ARABIC: 'arabic',
  ART: 'art',
  ARTMUSIC: 'artmusic',
  BELARUS: 'belarus',
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
  UKRAINIAN_LITERATURE: 'ukrainian-literature',
  WOS: 'wos'
};

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal'
};

const SubjectIcon = ({type, size = SIZE.NORMAL, className, mono}) => {
  const iconClass = classNames('sg-subject-icon', {
    [`sg-subject-icon--${size}`]: size !== SIZE.NORMAL
  }, className);
  const iconType = `#icon-subject-${mono ? 'mono-' : ''}${type}`;

  return <svg className={iconClass}>
    <use xlinkHref={iconType}></use>
  </svg>;
};

SubjectIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
  mono: PropTypes.bool,
  className: PropTypes.string
};

export default SubjectIcon;
export {TYPE, SIZE};
