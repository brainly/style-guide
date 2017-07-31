import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {TYPE} from 'logo/Logo';

const BASE_URL = 'https://styleguide.brainly.com/images/logos/';
const LOGOS = {
  'brainly': 'brainly-761d75d6ea',
  'eodev': 'eodev-1972bd4349',
  'nosdevoirs': 'nosdevoirs-e2d5d17215',
  'znanija': 'znanija-addd85e6f5'
};
const ICONS = {
  'brainly': 'brainly-mobile-426ef8718f',
  'eodev': 'eodev-mobile-b3319881d5',
  'nosdevoirs': 'nosdevoirs-mobile-0920e17308',
  'znanija': 'znanija-mobile-4b7ac3cb04'
};

const HomeButton = ({type = TYPE.BRAINLY, href = '#'}) => {

  const buttonClass = classnames('sg-home-button', {
    [`sg-home-button--${type}`]: type !== TYPE.BRAINLY
  });
  const logoPath = `${BASE_URL}${LOGOS[type]}.svg`;
  const mobilePath = `${BASE_URL}${ICONS[type]}.svg`;

  return <a href={href} className={buttonClass}>
    <img className="sg-home-button__logo-small" src={mobilePath}/>
    <img className="sg-home-button__logo-big" src={logoPath}/>
  </a>;
};

HomeButton.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  href: PropTypes.string
};

export default HomeButton;
export {TYPE};
