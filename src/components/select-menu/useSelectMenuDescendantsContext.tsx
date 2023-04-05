import * as React from 'react';
import {DescendantsManager} from './descendants';
import {useSafeLayoutEffect} from './utils';

type useSelectMenuDescendantsPropsType = {
  listRef: React.MutableRefObject<HTMLElement[]>;
};

export function useSelectMenuDescendants<
  T extends HTMLElement = HTMLElement,
  K extends Record<string, any> = {}
>({listRef}: useSelectMenuDescendantsPropsType) {
  const descendants = React.useRef(new DescendantsManager<T, K>({listRef}));

  useSafeLayoutEffect(() => {
    return () => descendants.current.destroy();
  }, []);

  return descendants.current;
}

export interface UseDescendantsReturn
  extends ReturnType<typeof useSelectMenuDescendants> {}

export const SelectMenuDescendantsContext =
  React.createContext<UseDescendantsReturn>(undefined);

const useSelectMenuDescendantsContext = () =>
  React.useContext(SelectMenuDescendantsContext);

export default useSelectMenuDescendantsContext;
