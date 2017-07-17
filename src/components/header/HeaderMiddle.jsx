import React from 'react';
import PropTypes from 'prop-types';

const HeaderMiddle = ({children}) => <div className="sg-header__middle">
  {children}
</div>;

HeaderMiddle.propTypes = {
  children: PropTypes.node
};

export default HeaderMiddle;
