/*jslint sloppy:true, nomen:true */
/*global jasmine, describe, xdescribe, it, xit,
 expect, beforeEach, afterEach,
 */
import React from 'react';
import $ from 'teaspoon';
import { default as renderAll, contains } from './renderAll';
import Button from 'components/mint-button-primary';

describe('contains', () => {
  it('should return true if the given element is in Array', () => {
    const arr = ['a', 'b', 'c'];
    const result = contains(arr)('a');

    expect(result).toEqual(true);
  });

  it('should return false if the given element is not in Array', () => {
    const arr = ['a', 'b', 'c'];
    const result = contains(arr)('d');

    expect(result).toEqual(false);
  });

  it('should return true if the given element is the same', () => {
    const arr = 'a';
    const result = contains(arr)('a');

    expect(result).toEqual(true);
  });

  it('should return false if the given element is not the same', () => {
    const arr = 'b';
    const result = contains(arr)('a');

    expect(result).toEqual(false);
  });

  it('should ignore null value', () => {
    const arr = null;
    const result = contains(arr)('a');

    expect(result).toEqual(false);
  });

  it('should ignore undefined value', () => {
    const arr = undefined;
    const result = contains(arr)('a');

    expect(result).toEqual(false);
  });
});

describe('renderAll', () => {
  it('should render all given types', () => {
    const types = {
      dark: 'dark',
      alt: 'alt'
    };

    const result = renderAll('type')(types, Button);
    expect(result.length).toEqual(2);
  });

  it('should render all given types with exception', () => {
    const types = {
      dark: 'dark',
      alt: 'alt',
      boom: 'boom'
    };

    const result = renderAll('type')(types, Button, 'boom');
    expect(result.length).toEqual(2);
  });
});
