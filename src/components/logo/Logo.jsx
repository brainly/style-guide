import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export const BASE_URL = 'https://styleguide.brainly.com/images/logos/';

export const TYPE = {
  BRAINLY: 'brainly',
  EODEV: 'eodev',
  NOSDEVOIRS: 'nosdevoirs',
  ZNANIJA: 'znanija',
  ZNANIJA_PLUS: 'znanija-plus',
  BRAINLY_PLUS_SMALL: 'brainly-plus-small',
  BRAINLY_PLUS: 'brainly-plus',
  BRAINLY_PLUS_INVERSE: 'brainly-plus-inverse'
};

export const LOGOS = {
  'brainly': 'brainly-761d75d6ea',
  'eodev': 'eodev-1972bd4349',
  'nosdevoirs': 'nosdevoirs-e2d5d17215',
  'znanija': 'znanija-addd85e6f5',
  'znanija-plus': 'znanija-plus-7649db3e26',
  'brainly-plus': 'brainly-plus-42debebd42',
  'brainly-plus-inverse': 'brainly-plus-inverse-b9b5efbf59',
  'brainly-plus-small': 'brainly-plus-small-9dd3b24a28'
};

const Logo = ({type = TYPE.BRAINLY, className, ...props}) => {

  const logoClass = classnames('sg-logo', {
    [`sg-logo--${type}`]: type !== TYPE.BRAINLY
  }, className);

  const logoPath = `${BASE_URL}${LOGOS[type]}.svg`;

  return (
    <div {...props} className={logoClass}>
      <img className="sg-logo__image" src={logoPath} />
    </div>
  );
};

Logo.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  className: PropTypes.string
};

export default Logo;
