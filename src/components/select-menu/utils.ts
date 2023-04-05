import * as React from 'react';

export const useSafeLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

/**
 * Sort an array of DOM nodes according to the HTML tree order
 * @see http://www.w3.org/TR/html5/infrastructure.html#tree-order
 */
export function sortNodes(nodes: Node[]) {
  return nodes.sort((a, b) => {
    const compare = a.compareDocumentPosition(b);

    if (
      compare & Node.DOCUMENT_POSITION_FOLLOWING ||
      compare & Node.DOCUMENT_POSITION_CONTAINED_BY
    ) {
      // a < b
      return -1;
    }

    if (
      compare & Node.DOCUMENT_POSITION_PRECEDING ||
      compare & Node.DOCUMENT_POSITION_CONTAINS
    ) {
      // a > b
      return 1;
    }

    if (
      compare & Node.DOCUMENT_POSITION_DISCONNECTED ||
      compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    ) {
      throw Error('Cannot sort the given nodes.');
    } else {
      return 0;
    }
  });
}
