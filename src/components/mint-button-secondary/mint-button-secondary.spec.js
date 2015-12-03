/*jslint sloppy:true, nomen:true */
/*global jasmine, describe, xdescribe, it, xit,
 expect, beforeEach, afterEach,
 */
import React from 'react';
import { availableTypes as types, default as Component } from './index';
import $ from 'teaspoon';

describe('mint-button-secondary', () => {
  it('should have class mint-button-secondary', function () {
    expect($(<Component/>).render()).toHaveClass('mint-button-secondary');
  });

  it('should have class mint-button--alt', function () {
    expect(types.alt).toBeDefined();
    expect($(<Component type="alt"/>).render()).toHaveClass('mint-button-secondary--alt');
  });

  it('should have class mint-button--dark', function () {
    expect(types.dark).toBeDefined();
    expect($(<Component type="dark"/>).render()).toHaveClass('mint-button-secondary--dark');
  });

  it('should have class mint-button-secondary--light', function () {
    expect(types.light).toBeDefined();
    expect($(<Component type="light"/>).render()).toHaveClass('mint-button-secondary--light');
  });

  it('should have class mint-button-secondary--peach', function () {
    expect(types.peach).toBeDefined();
    expect($(<Component type="peach"/>).render()).toHaveClass('mint-button-secondary--peach');
  });

  it('should have class mint-button-secondary--gray', function () {
    expect(types.gray).toBeDefined();
    expect($(<Component type="gray"/>).render()).toHaveClass('mint-button-secondary--gray');
  });

  it('should have class mint-button-secondary--action', function () {
    expect(types.action).toBeDefined();
    expect($(<Component type="action"/>).render()).toHaveClass('mint-button-secondary--action');
  });

  it('should have class mint-button-secondary--light-blue', function () {
    expect(types.lightBlue).toBeDefined();
    expect($(<Component type="light-blue"/>).render()).toHaveClass('mint-button-secondary--light-blue');
  });

});
