import React from 'react';
import Hole from './index';
import $ from 'teaspoon';

describe('hole', function () {
  it('should render class with __hole element', function () {
    let result = $(<Hole className="test"/>).render();
    expect(result).toHaveClass('test__hole');
  });
});
