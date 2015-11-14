import React from 'react';
import not from 'not';

export function contains (arr) {
  return (key) => {
    if (Array.isArray(arr)) {
      return arr.indexOf(key) > -1;
    } else {
      return Boolean(arr && arr === key);
    }
  }
}

export default function renderAll (attr) {
  return (modifiers, Elt, except) => {
    return Object.keys(modifiers)
      .filter(not(contains(except)))
      .map((mod, key) => {
        let attrs = {
          [attr]: mod, key: key
        };

        return <Elt {...attrs }>Example</Elt>;
      });
  }
};
