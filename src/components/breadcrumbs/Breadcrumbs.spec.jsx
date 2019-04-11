import React from 'react';
import Breadcrumb from './Breadcrumb';
import {shallow} from 'enzyme';

const elements = ['Coments (9)', 'Report', 'Follow'];

test('render', () => {
  const breadcrumb = shallow(
    <Breadcrumb elements={elements} />
  );

  expect(breadcrumb.hasClass('sg-breadcrumb-list')).toEqual(true);
  expect(breadcrumb.find('.sg-breadcrumb-list__element')).toHaveLength(elements.length);
});

test('short', () => {
  const breadcrumb = shallow(
    <Breadcrumb elements={elements} short />
  );

  expect(breadcrumb.hasClass('sg-breadcrumb-list--short')).toEqual(true);
});

test('adaptive', () => {
  const breadcrumb = shallow(
    <Breadcrumb elements={elements} adaptive />
  );

  expect(breadcrumb.hasClass('sg-breadcrumb-list--adaptive')).toEqual(true);
});
