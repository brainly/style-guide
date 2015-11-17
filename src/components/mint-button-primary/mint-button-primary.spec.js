/* jslint sloppy:true, nomen:true */
/* global jasmine, describe, xdescribe, it, xit,
 expect, beforeEach, afterEach,
 */
import React from 'react';
import { availableTypes as types, default as Button} from './index';
import $ from 'teaspoon';

describe('mint-button-primary', () => {
  it('should have defaultTypes available', () => {
    expect(types).toBeDefined();
  });

  it('should have dark type available', () => {
    expect(types.dark).toBeDefined();
  });

  it('should have alt type available', () => {
    expect(types.alt).toBeDefined();
  });

  it('should have mint-button-primary class', () => {
    expect($(<Button/>).render()).toHaveClass('mint-button-primary');
  });

  it('should have mint-button--alt class', () => {
    expect($(<Button type="alt"/>).render()).toHaveClass('mint-button-primary--alt');
  });

  it('should have mint-button--dark class', () => {
    expect($(<Button type="dark"/>).render()).toHaveClass('mint-button-primary--dark');
  });

  it('should have mint-button-primary--full class', () => {
    expect($(<Button width="full"/>).render()).toHaveClass('mint-button-primary--full');
  });
});
