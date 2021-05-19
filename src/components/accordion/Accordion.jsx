//@flow strict

// eslint-disable-next-line import/no-duplicates
import * as React from 'react';
import {
  createContext,
  useReducer,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
  // eslint-disable-next-line import/no-duplicates
} from 'react';
import cx from 'classnames';
import useReducedMotion from '../utils/useReducedMotion';
import {__DEV__} from '../utils';
import invariant from '../utils/invariant';

export const KEY_CODES = {
  '32': 'space',
  '13': 'enter',
};

type OpenedItemsType = {
  [string]: boolean,
  ...,
};

type StateType = $ReadOnly<{
  opened: OpenedItemsType,
  focusedElementId: string | null,
}>;

type ActionType =
  | {
      type: 'accordion/SET_OPENED',
      payload: {opened: OpenedItemsType},
    }
  | {type: 'accordion/KEYBOARD_SET_OPENED'}
  | {
      type: 'accordion/SET_FOCUSED',
      payload: {id: string},
    };

export type AccordionPropsType = $ReadOnly<{
  allowMultiple?: boolean,
  children: React.Node,
  className?: string,
  spacing?:
    | 'xxs'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'
    | 'xxl'
    | 'xxxl'
    | 'xxxxl'
    | 'none',
  reduceMotion?: boolean,
  index?: string | Array<string>,
  defaultIndex?: string | Array<string>,
  onChange?: string => void,
}>;

type ContextType = {
  noGapBetweenElements: boolean,
  opened: OpenedItemsType,
  focusedElementId: string | null,
  dispatch: (action: ActionType) => void,
  reduceMotion: boolean,
  onItemSelect: (id: string, value: boolean) => void,
  ...
};

export const AccordionContext = createContext<ContextType>({});

export const spaceClasses = {
  xxs: 'sg-space-y-xxs',
  xs: 'sg-space-y-xs',
  s: 'sg-space-y-s',
  m: 'sg-space-y-m',
  l: 'sg-space-y-l',
  xl: 'sg-space-y-xl',
  xxl: 'sg-space-y-xxl',
  xxxl: 'sg-space-y-xxxl',
  xxxxl: 'sg-space-y-xxxxl',
};

const Accordion = ({
  children,
  allowMultiple = false,
  className = '',
  spacing = 's',
  reduceMotion = false,
  defaultIndex,
  index,
  onChange,
}: AccordionPropsType) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isControlled = index !== undefined;
  const wasControlled = useRef<boolean>(isControlled);
  const isCallbackMissing = isControlled && !onChange;
  const hasComponentChangedToUncontrolled = wasControlled && !isControlled;
  const hasComponentChangedToControlled = !wasControlled && isControlled;
  const isAllowMultiplePassedForControlled = isControlled && allowMultiple;

  if (__DEV__) {
    invariant(
      !isCallbackMissing,
      // eslint-disable-next-line max-len
      ' You provided an `index` prop to a Accordion without an `onChange` handler. Users won`t be able to switch between expanded/collapsed state.'
    );

    invariant(
      !hasComponentChangedToUncontrolled,
      'You cannot change Accordion component from controlled to uncontrolled variant.'
    );

    invariant(
      !hasComponentChangedToControlled,
      'You cannot change Accordion component from uncontrolled to controlled variant.'
    );

    invariant(
      !isAllowMultiplePassedForControlled,
      'allowMultiple is not working in controlled Accordion'
    );

    invariant(
      !(
        !allowMultiple &&
        Array.isArray(defaultIndex) &&
        defaultIndex.length > 1
      ),
      // eslint-disable-next-line max-len
      'defaultIndex is an array with more than 1 element but allowMultiple prop is not set. The first item from the array was picked as a default index. Set allowMultiple attribute or provide only one default index.'
    );
  }

  const getUpdatedOpenedItems = useCallback(
    (opened: OpenedItemsType, id: string, value: boolean) => {
      return allowMultiple ? {...opened, [id]: value} : {[id]: value};
    },
    [allowMultiple]
  );

  const [state, dispatch] = useReducer(reducer, null, () => {
    if (isControlled) {
      return {
        opened: {},
        focusedElementId: null,
      };
    }

    if (defaultIndex !== undefined) {
      const indexArray = !Array.isArray(defaultIndex)
        ? [defaultIndex]
        : defaultIndex;

      const newState = indexArray
        .filter(item => item !== null)
        .filter((item, index) => (allowMultiple ? true : index < 1))
        .reduce((obj, index) => ({...obj, [index]: true}), {});

      return {
        opened: newState,
        focusedElementId: null,
      };
    }

    return {
      opened: {},
      focusedElementId: null,
    };
  });
  const hasReduceMotion = useReducedMotion() || reduceMotion;

  useEffect(() => {
    const wrapper = wrapperRef.current;

    function handleKeyDown(event: KeyboardEvent) {
      const key = KEY_CODES[event.keyCode];

      if (['space', 'enter'].includes(key)) {
        if (
          event.target instanceof HTMLElement &&
          event.target.id === state.focusedElementId
        ) {
          event.preventDefault();
        }

        dispatch({type: 'accordion/KEYBOARD_SET_OPENED'});
      }
    }

    if (!wrapper) return;
    wrapper.addEventListener('keydown', handleKeyDown);

    return () => {
      if (!wrapper) return;
      wrapper.removeEventListener('keydown', handleKeyDown);
    };
  }, [state.focusedElementId]);

  function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
      case 'accordion/SET_OPENED': {
        const {opened} = action.payload;

        return {
          ...state,
          opened,
        };
      }

      case 'accordion/KEYBOARD_SET_OPENED': {
        const {opened, focusedElementId} = state;

        if (focusedElementId === null) return state;

        return {
          ...state,
          opened: getUpdatedOpenedItems(
            state.opened,
            focusedElementId,
            !opened[focusedElementId]
          ),
        };
      }

      case 'accordion/SET_FOCUSED': {
        return {
          ...state,
          focusedElementId: action.payload.id,
        };
      }

      default:
        return state;
    }
  }

  const [prevIndex, setPrevIndex] = useState();

  if (isControlled) {
    if (index !== prevIndex) {
      setPrevIndex(index);

      // index || '' is to satisfy flow.
      // isControlled flag is true when index !== undefined but this condition is not interpreted
      // correctly by flow causing type error. Replacing isControlled with index !== undefined would work but using isControlled is more clear
      const indexArray = Array.isArray(index) ? index : [index || ''];

      const newState = indexArray.reduce(
        (obj, idx) => ({...obj, [idx]: true}),
        {}
      );

      dispatch({
        type: 'accordion/SET_OPENED',
        payload: {opened: newState},
      });
    }
  }

  const noGapBetweenElements = spacing === 'none';
  const spaceClass = spacing === 'none' ? undefined : spaceClasses[spacing];

  const onItemSelect = useCallback(
    (id, value) => {
      onChange?.(id);

      if (!isControlled) {
        dispatch({
          type: 'accordion/SET_OPENED',
          payload: {
            opened: getUpdatedOpenedItems(state.opened, id, value),
          },
        });
      }
    },
    [getUpdatedOpenedItems, isControlled, onChange, state.opened]
  );

  const context = useMemo(
    () => ({
      noGapBetweenElements,
      opened: state.opened,
      focusedElementId: state.focusedElementId,
      dispatch,
      reduceMotion: hasReduceMotion,
      onItemSelect,
    }),
    [
      hasReduceMotion,
      noGapBetweenElements,
      onItemSelect,
      state.focusedElementId,
      state.opened,
    ]
  );

  return (
    <AccordionContext.Provider value={context}>
      <div ref={wrapperRef} className={cx(spaceClass, className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
