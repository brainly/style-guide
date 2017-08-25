import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {TYPE as ICON_TYPE, COLOR as ICON_COLOR} from '../icons/Icon';
import ListItem from './subcomponents/ListItem';

const List = ({items = [], spaced, small, iconType, iconColor, className, ...props}) => {
  const listClass = classNames('sg-list', {
    'sg-list--spaced-elements': spaced
  }, className);

  return (
    <ul {...props} className={listClass}>
      {items.map((text, index) =>
        <ListItem key={index} text={text} small={small} iconType={iconType} iconColor={iconColor} />
      )}
    </ul>
  );
};

List.propTypes = {
  spaced: PropTypes.bool,
  small: PropTypes.bool,
  iconType: PropTypes.oneOf(Object.values(ICON_TYPE)),
  iconColor: PropTypes.oneOf(Object.values(ICON_COLOR)),
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string
};

export default List;
export {ListItem, ICON_COLOR, ICON_TYPE};
