import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';

const SpinnerContainer = ({loading, gray, children}) => (
  <div className="sg-spinner-container">
    {children}
    {loading &&
      <div className="sg-spinner-container__overlay">
        <Spinner gray={gray} />
      </div>
    }
  </div>
);

SpinnerContainer.propTypes = {
  loading: PropTypes.bool,
  gray: PropTypes.bool,
  children: PropTypes.node
};

export default SpinnerContainer;
