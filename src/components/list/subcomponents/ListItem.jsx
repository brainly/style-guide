import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {TYPE as ICON_TYPE, ICON_COLOR} from '../../icons/Icon';
import Text, {SIZE} from '../../text/Text';

const ListItem = ({text, small, iconType, iconColor = ICON_COLOR.LIGHT}) => {
  const iconClass = classNames('sg-list__icon', {
    'sg-list__icon--spacing-right-small': small
  });
  let content = <Text size={SIZE.HEADLINE}>{text}</Text>;
  let iconSize = 18;

  if (small) {
    content = text;
    iconSize = 14;
  }

  return (
    <li className="sg-list__element">
      {iconType &&
      <div className={iconClass}>
        <Icon type={iconType} size={iconSize} color={iconColor} />
      </div>
      }
      {content}
    </li>
  );
};

ListItem.propTypes = {
  small: PropTypes.bool,
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE)),
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  text: PropTypes.node.isRequired
};

export default ListItem;
