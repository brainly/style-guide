import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};

const FlashMessage = ({text, type = TYPE.DEFAULT}) => {
  const messageClass = classNames('sg-flash__message', {
    [`sg-flash__message--${type}`]: type !== TYPE.DEFAULT
  });

  return <div className="sg-flash">
    <div className={messageClass}>
      <div className="sg-text sg-text--emphasised sg-text--small sg-text--light">
        {text}
      </div>
    </div>
  </div>;
};

FlashMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(TYPE))
};

export default FlashMessage;
export {TYPE};
