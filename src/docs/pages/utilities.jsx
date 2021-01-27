import * as React from 'react';
import ItemsInteractivePage from '../layouts/ItemsInteractivePage';

const utilities = props => (
  <ItemsInteractivePage
    {...props}
    navigationIdx={3}
    pageBundleName="utilities"
  />
);

export default utilities;
