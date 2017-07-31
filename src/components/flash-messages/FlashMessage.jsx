import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text, {SIZE, COLOR, WEIGHT} from '../text/Text';

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
      <Text size={SIZE.SMALL} color={COLOR.LIGHT} weight={WEIGHT.BOLD}>
        {text}
      </Text>
    </div>
  </div>;
};

FlashMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(TYPE))
};

export default FlashMessage;
export {TYPE};
