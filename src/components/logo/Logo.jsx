import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const BASE_URL = 'https://styleguide.brainly.com/images/logos/';

const TYPE = {
  BRAINLY: 'brainly',
  EODEV: 'eodev',
  NOSDEVOIRS: 'nosdevoirs',
  ZNANIJA: 'znanija'
};

const LOGOS = {
  'brainly': 'brainly-761d75d6ea',
  'eodev': 'eodev-1972bd4349',
  'nosdevoirs': 'nosdevoirs-e2d5d17215',
  'znanija': 'znanija-addd85e6f5'
};

const Logo = ({type = TYPE.BRAINLY, className, ...props}) => {

  const logoClass = classnames('sg-logo', {
    [`sg-logo--${type}`]: type !== TYPE.BRAINLY
  }, className);

  const logoPath = `${BASE_URL}${LOGOS[type]}.svg`;

  return <div {...props} className={logoClass}>
    <img className="sg-logo__image" src={logoPath}/>
  </div>;
};

Logo.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  className: PropTypes.string
};

export default Logo;
export {TYPE, BASE_URL, LOGOS};
