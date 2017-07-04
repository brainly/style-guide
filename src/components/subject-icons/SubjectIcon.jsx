import React from 'react';
import PropTypes from 'prop-types';
const types = {
  accountancy: 'accountancy',
  administration: 'administration',
  agricultural: 'agricultural',
  algebra: 'algebra',
  all: 'all',
  arabic: 'arabic',
  art: 'art',
  artmusic: 'artmusic',
  belarus: 'belarus',
  biology: 'biology',
  business: 'business',
  catala: 'catala',
  chemistry: 'chemistry',
  chinese: 'chinese',
  egzam: 'egzam',
  economics: 'economics',
  english: 'english',
  entrepreneurship: 'entrepreneurship',
  ethics: 'ethics',
  euskara: 'euskara',
  french: 'french',
  first_aid: 'first-aid',
  galego: 'galego',
  geography: 'geography',
  geology: 'geology',
  geometry: 'geometry',
  german: 'german',
  grammar: 'grammar',
  health: 'health',
  history: 'history',
  india_lang: 'india-lang',
  indonesian_lang: 'indonesian-lang',
  informatics: 'informatics',
  italian: 'italian',
  japanese: 'japanese',
  kazach: 'kazach',
  korean: 'korean',
  language: 'language',
  latin: 'latin',
  law: 'law',
  life_science: 'life-science',
  literature: 'literature',
  logic: 'logic',
  mathematics: 'mathematics',
  music: 'music',
  nigerian_lang: 'nigerian-lang',
  otherlanguages: 'otherlanguages',
  others: 'others',
  pedagogics: 'pedagogics',
  philosophy: 'philosophy',
  physical_education: 'physical-education',
  physics: 'physics',
  politics: 'politics',
  psychology: 'psychology',
  religion: 'religion',
  rpa_lang: 'rpa-lang',
  russian: 'russian',
  science: 'science',
  security: 'security',
  skills: 'skills',
  social: 'social',
  sociology: 'sociology',
  spanish: 'spanish',
  statistics: 'statistics',
  technology: 'technology',
  tourism: 'tourism',
  traffic: 'traffic',
  ukrainian: 'ukrainian',
  wos: 'wos'
};

const SubjectIcon = ({type}) => {
  const iconClass = 'sg-subject-icon';
  const iconType = `#icon-subject-${type}`;

  return <svg className={iconClass}>
    <use xlinkHref={iconType}></use>
  </svg>;
};

SubjectIcon.propTypes = {
  type: PropTypes.oneOf(Object.values(types)).isRequired
};

export default SubjectIcon;
export {types};
