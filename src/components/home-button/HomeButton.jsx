import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {TYPE} from 'logo/Logo';

const HomeButton = ({type = TYPE.BRAINLY, href = '#'}) => {

  const buttonClass = classnames('sg-home-button', {
    [`sg-home-button--${type}`]: type !== TYPE.BRAINLY
  });
  const logoPath = `images/logos/${type}.svg`;
  const mobilePath = `images/logos/${type}-mobile.svg`;

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
