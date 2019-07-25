import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import '../main.scss';
import './_sass/main.scss';
import Entry from './pages/interactive';
import {sections} from './page-components';

const requireAll = r => {
  r.keys().forEach(r);
};

requireAll(require.context('../images/', true, /\.svg$/));

const Wrapped = hot(Entry);

ReactDOM.render(<Wrapped
  rootNodeToBeRemovedAfterFullWebpackMigration={
    <div >
      {sections}
    </div>}
/>, document.getElementById('root'));
