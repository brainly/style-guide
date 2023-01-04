import {__DEV__} from './consts';
export default function invariant(condition: boolean, message: string): void {
  if (__DEV__) {
    if (condition) {
      return;
    }

    const text: string = `Warning: ${message}`;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}