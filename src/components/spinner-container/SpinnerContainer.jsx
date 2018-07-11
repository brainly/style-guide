import React from 'react';
import PropTypes from 'prop-types';

const SpinnerContainer = ({loading, children}) => (
  <div className="sg-spinner-container">
    {children}
    {loading &&
      <div className="sg-spinner-container__overlay">
        <span>spinner</span>
      </div>
    }
  </div>
);

SpinnerContainer.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool
};

export default SpinnerContainer;
