import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icons/Icon';
import Text, {SIZE} from '../text/Text';


const ListItem = ({text, small}) => {
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
      <Icon type="arrow_right" size={iconSize}/>
    </div>
    {content}
  </li>;
};

ListItem.propTypes = {
  small: PropTypes.bool,
  text: PropTypes.node.isRequired
};

export default ListItem;
