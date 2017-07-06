import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListItem from '../list/ListItem';

const List = ({items, spaced, small}) => {
  const listClass = classNames('sg-list', {
    'sg-list--spaced-elements': spaced
  });

  return <ul className={listClass}>
    {items.map((text, index) =>
      <ListItem key={index} text={text} small={small}/>
    )}
  </ul>;
};

List.propTypes = {
  spaced: PropTypes.bool,
  small: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default List;
