import React from 'react';
import ItemsPage from '../layouts/ItemsPage';

var basics = function basics() {
  return React.createElement(ItemsPage, {
    navigationIdx: 0
  });
};

export default basics;