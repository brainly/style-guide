import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from '../icons/Icon';
import Text, {SIZE} from '../text/Text';


const ListItem = ({text, small, iconType = ICON_TYPE.ARROW_RIGHT, iconColor = ICON_COLOR.DARK}) => {
  const iconClass = classNames('sg-list__icon', {
    'sg-list__icon--spacing-right-small': small
  });
  let content = <Text size={SIZE.HEADLINE}>{text}</Text>;
  let iconSize = 18;

  if (small) {
    content = text;
    iconSize = 14;
  }

  return <li className="sg-list__element">
    <div className={iconClass}>
      <Icon type={iconType} size={iconSize} color={iconColor}/>
    </div>
    {content}
  </li>;
};

ListItem.propTypes = {
  small: PropTypes.bool,
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE)),
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  text: PropTypes.node.isRequired
};

const List = ({items, spaced, small, iconType, iconColor}) => {
  const listClass = classNames('sg-list', {
    'sg-list--spaced-elements': spaced
  });

  return <ul className={listClass}>
    {items.map((text, index) =>
      <ListItem key={index} text={text} small={small} iconType={iconType} iconColor={iconColor}/>
    )}
  </ul>;
};

List.propTypes = {
  spaced: PropTypes.bool,
  small: PropTypes.bool,
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE)),
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  items: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default List;
export {ListItem, ICON_COLOR, ICON_TYPE};
