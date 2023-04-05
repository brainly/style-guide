import * as React from 'react';
import {useMergeRefs} from '@floating-ui/react';
import useSelectMenuDescendantsContext from './useSelectMenuDescendantsContext';
import {useSafeLayoutEffect} from './utils';

const useSelectMenuOption = () => {
  const descendants = useSelectMenuDescendantsContext();

  const [index, setIndex] = React.useState<number>(null);
  const ref = React.useRef(null);

  useSafeLayoutEffect(() => {
    return () => {
      if (!ref.current) return;
      descendants.unregister(ref.current);
    };
  }, []);

  useSafeLayoutEffect(() => {
    if (!ref.current) return;
    const dataIndex = Number(ref.current.dataset['index']);

    if (index !== dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex);
    }
  });

  const refCallback = descendants.register;

  return {
    descendants,
    index,
    register: useMergeRefs([refCallback, ref]),
  };
};

export default useSelectMenuOption;
