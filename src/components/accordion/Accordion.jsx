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
      payload: {id: string, value: boolean},
    }
  | {type: 'accordion/KEYBOARD_SET_OPENED'}
  | {
      type: 'accordion/SET_FOCUSED',
      payload: {id: string},
    }
  | {
      type: 'accordion/OVERWRITE_OPENED',
      payload: {opened: OpenedItemsType},
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
  index?: string | [string],
  onChange?: string => void,
}>;

type ContextType = {
  noGapBetweenElements: boolean,
  opened: OpenedItemsType,
  focusedElementId: string | null,
  dispatch: (action: ActionType) => void,
  reduceMotion: boolean,

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
      ' You provided an `index` prop to a Accordion without an `onChange` handler. Interacting with accordion elements will not toggle between the collapsed and expanded states.'
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
  }

  const [state, dispatch] = useReducer(reducer, {
    opened: {},
    focusedElementId: null,
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

  function getUpdatedOpenedItems(
    opened: OpenedItemsType,
    id: string,
    value: boolean
  ) {
    return allowMultiple ? {...opened, [id]: value} : {[id]: value};
  }

  function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
      case 'accordion/SET_OPENED': {
        const {id, value} = action.payload;

        return {
          ...state,
          opened: getUpdatedOpenedItems(state.opened, id, value),
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

      case 'accordion/OVERWRITE_OPENED': {
        const {opened} = action.payload;

        return {
          ...state,
          opened,
        };
      }

      default:
        return state;
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
          payload: {id, value},
        });
      }
    },
    [isControlled, onChange]
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

  const [prevIndex, setPrevIndex] = useState();

  if (isControlled) {
    if (index !== prevIndex) {
      setPrevIndex(index);

      if (index === null) {
        dispatch({
          type: 'accordion/OVERWRITE_OPENED',
          payload: {opened: {}},
        });
        return;
      }

      const indexArray = typeof index === 'string' ? [index] : index;
      const newState = indexArray.reduce(
        (obj, index) => ({...obj, [index]: true}),
        {}
      );

      dispatch({
        type: 'accordion/OVERWRITE_OPENED',
        payload: {opened: newState},
      });
    }
  }

  return (
    <AccordionContext.Provider value={context}>
      <div ref={wrapperRef} className={cx(spaceClass, className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
