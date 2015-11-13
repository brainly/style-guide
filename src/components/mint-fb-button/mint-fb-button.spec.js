/*jslint sloppy:true, nomen:true */
/*global jasmine, describe, xdescribe, it, xit,
 expect, beforeEach, afterEach,
 */
import React from 'react';
import Component from './index';
import $ from 'teaspoon';

describe('mint-fb-button', () => {
  it('should have a mint-button-primary block class', function () {
    expect($(<Component/>).render()).toHaveClass('mint-button-primary');
  });

  it('should have a --fb modifier class', () => {
    expect($(<Component/>).render()).toHaveClass('mint-button-primary--fb');
  });

  // TODO: fix test by adding Icon: https://github.com/brainly/style-guide/issues/577
  xit('should have a __icon element class', () => {
    expect($(<Component/>).render()).toHaveClass('mint-button-primary__icon');
  });
});
