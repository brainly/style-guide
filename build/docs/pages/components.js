import React from 'react';
import ItemsPage from '../layouts/ItemsPage';

var components = function components() {
  return React.createElement(ItemsPage, {
    navigationIdx: 1
  });
};

export default components;