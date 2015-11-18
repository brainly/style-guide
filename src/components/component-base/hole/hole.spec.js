import React from 'react';
import Hole from './index';
import $ from 'teaspoon';

describe('hole', () => {
  it('should render class with __hole element', () => {
    let result = $(<Hole className="test"/>).render();
    expect(result).toHaveClass('test__hole');
  });
});
