import * as React from 'react';
import ItemsInteractivePage from '../layouts/ItemsInteractivePage';

const interactive = props => (
  <ItemsInteractivePage
    {...props}
    navigationIdx={4}
    pageBundleName="components"
  />
);

export default interactive;
