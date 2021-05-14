// @flow strict

import {__DEV__} from '../utils';

export default function displayWarning(
  condition: boolean,
  message: string
): void {
  // don't do anything in production
  // wrapping in production check for better dead code elimination
  if (__DEV__) {
    // condition passed: do not log
    if (condition) {
      return;
    }
    // Condition not passed
    const text: string = `Warning: ${message}`;

    // check console for IE9 support which provides console
    // only with open devtools
    if (typeof console !== 'undefined') {
      console.warn(text);
    }
    // Throwing an error and catching it immediately
    // to improve debugging
    try {
      throw Error(text);
    } catch (x) {}
  }
}
