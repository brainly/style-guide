import React from 'react';
import PropTypes from 'prop-types';
import Spinner, {SPINNER_SIZE} from '../spinner/Spinner';

export {SPINNER_SIZE} from '../spinner/Spinner';

const SpinnerContainer = ({loading, light, size, children, ...props}) => (
  <div {...props} className="sg-spinner-container">
    {children}
    {loading &&
      <div className="sg-spinner-container__overlay">
        <Spinner light={light} size={size} />
      </div>
    }
  </div>
);

SpinnerContainer.propTypes = {
  loading: PropTypes.bool,
  light: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SPINNER_SIZE)),
  children: PropTypes.node
};

export default SpinnerContainer;
