import * as React from 'react';
import {sortNodes} from './utils';

export type DescendantOptions<T = {}> = T & {
  /**
   * If `true`, the item will be registered in all nodes map
   * but omitted from enabled nodes map
   */
  disabled?: boolean;
  id?: string;
};

export type Descendant<T, K> = DescendantOptions<K> & {
  node: T;
  /**
   * index of item in all nodes map and enabled nodes map
   */
  index: number;
};

/**
 * @internal
 *
 * Class to manage descendants and their relative indices in the DOM.
 * It uses `node.compareDocumentPosition(...)` under the hood
 */
export class DescendantsManager<
  T extends HTMLElement,
  K extends Record<string, any> = {}
> {
  private descendants = new Map<T, Descendant<T, K>>();
  private listRef: React.MutableRefObject<HTMLElement[]>;

  constructor(props) {
    this.listRef = props.listRef;
  }

  register = (node: T | null) => {
    if (node === null) return;

    return this.registerNode(node);
  };

  unregister = (node: T) => {
    // Clear the listRef array
    // all items are sorted and reassigned in assignIndex()
    this.listRef.current = [];
    this.descendants.delete(node);
    const sorted = sortNodes(Array.from(this.descendants.keys()));

    this.assignIndex(sorted);
  };

  destroy = () => {
    this.descendants.clear();
  };

  private assignIndex = (descendants: Node[]) => {
    this.descendants.forEach(descendant => {
      const indexOf = descendants.indexOf(descendant.node);

      this.listRef.current[indexOf] = descendant.node;

      descendant.index = indexOf;
      descendant.node.dataset['index'] = descendant.index.toString();
    });
  };

  count = () => this.descendants.size;

  values = () => {
    const values = Array.from(this.descendants.values());

    return values.sort((a, b) => a.index - b.index);
  };

  item = (index: number) => {
    if (this.count() === 0) return undefined;
    return this.values()[index];
  };

  indexOf = (node: T | null) => {
    if (!node) return -1;
    return this.descendants.get(node)?.index ?? -1;
  };

  private registerNode = (node: T | null, options?: DescendantOptions<K>) => {
    if (!node || this.descendants.has(node)) return;

    const keys = Array.from(this.descendants.keys()).concat(node);
    const sorted = sortNodes(keys);

    if (options?.disabled) {
      options.disabled = !!options.disabled;
    }

    const descendant = {node, index: -1, ...options};

    this.descendants.set(node, descendant as Descendant<T, K>);
    this.assignIndex(sorted);
  };
}
