import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Text, {TEXT_SIZE, TEXT_COLOR, TEXT_WEIGHT} from '../text/Text';

export const TYPE = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info'
};

const FlashMessage = ({text, type = TYPE.DEFAULT, className, ...props}) => {
  const messageClass = classNames('sg-flash__message', {
    [`sg-flash__message--${type}`]: type !== TYPE.DEFAULT
  }, className);

  return (
    <div {...props} className="sg-flash">
      <div className={messageClass}>
        <Text size={TEXT_SIZE.SMALL} color={TEXT_COLOR.WHITE} weight={TEXT_WEIGHT.BOLD}>
          {text}
        </Text>
      </div>
    </div>
  );
};

FlashMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(TYPE)),
  className: PropTypes.string
};

export default FlashMessage;
