import React from 'react';
import ItemsPage from '../layouts/ItemsPage';

var containers = function containers() {
  return React.createElement(ItemsPage, {
    navigationIdx: 2
  });
};

export default containers;