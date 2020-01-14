import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import * as IconModule from '../icons/Icon';
export var TYPE = {
  ACCOUNTANCY: 'accountancy',
  ADMINISTRATION: 'administration',
  AGRICULTURAL: 'agricultural',
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
  KYRGYZ: 'kyrgyz',
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
  UZBEK: 'uzbek',
  WOS: 'wos'
};
export var SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  NORMAL: 'normal'
};

var SubjectIcon = function SubjectIcon(_ref) {
  var _classNames;

  var type = _ref.type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? SIZE.NORMAL : _ref$size,
      monoColor = _ref.monoColor,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["type", "size", "monoColor", "className"]);

  var iconClass = classNames('sg-subject-icon', (_classNames = {}, _defineProperty(_classNames, "sg-subject-icon--".concat(size), size !== SIZE.NORMAL), _defineProperty(_classNames, "sg-subject-icon--".concat(String(monoColor)), monoColor !== IconModule.ICON_COLOR.LIGHT && monoColor !== undefined), _classNames), className);
  var iconType = "#icon-subject-".concat(monoColor ? 'mono-' : '').concat(type);
  return React.createElement("svg", _extends({}, props, {
    className: iconClass
  }), React.createElement("use", {
    xlinkHref: iconType
  }));
};

export default SubjectIcon;
export { ICON_COLOR } from '../icons/Icon';