import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Media = props => {
  const {
    contentArray = [],
    aside,
    className,
    toRight, focused,
    clickable,
    noPadding,
    transparent,
    graySecondaryLight,
    small,
    spacedBottom,
    ...restProps
  } = props;
  const mediaClassName = classnames('sg-media', {
    'sg-media--to-right': toRight,
    'sg-media--focused': focused,
    'sg-media--clickable': clickable,
    'sg-media--no-padding': noPadding,
    'sg-media--transparent': transparent,
    'sg-media--gray-secondary-light': graySecondaryLight
  }, className);
  const contentClassName = classnames('sg-media__content', {
    'sg-media__content--small': small,
    'sg-media__content--spaced-bottom': spacedBottom
  });

  return (
    <div {...restProps} className={mediaClassName}>
      <div className="sg-media__aside">
        {aside}
      </div>
      <div className="sg-media__wrapper">
        {contentArray.map((content, index) => <div key={index} className={contentClassName}>{content}</div>)}
      </div>
    </div>
  );
};

Media.propTypes = {
  aside: PropTypes.node.isRequired,
  contentArray: PropTypes.arrayOf(PropTypes.node).isRequired,
  toRight: PropTypes.bool,
  focused: PropTypes.bool,
  clickable: PropTypes.bool,
  noPadding: PropTypes.bool,
  transparent: PropTypes.bool,
  graySecondaryLight: PropTypes.bool,
  small: PropTypes.bool,
  spacedBottom: PropTypes.bool,
  className: PropTypes.string
};

export default Media;
