//@flow strict

import React, {createContext, useReducer, useEffect, useRef} from 'react';
import cx from 'classnames';
import useReducedMotion from '../utils/useReducedMotion';

export const KEY_CODES = {
  '32': 'space',
  '13': 'enter',
};

type OpenedItemsType = {
  [key: string]: boolean,
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
    };

type PropType = $ReadOnly<{
  allowMultiple?: boolean,
  children: React$Node,
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
}>;

// $FlowFixMe context doesn't need to be defined here
export const AccordionContext = createContext();

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
}: PropType) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [state, dispatch] = useReducer<StateType, ActionType>(reducer, {
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

      default:
        return state;
    }
  }

  const noGapBetweenElements = spacing === 'none';
  const spaceClass = spacing === 'none' ? undefined : spaceClasses[spacing];

  return (
    <AccordionContext.Provider
      value={{
        noGapBetweenElements,
        opened: state.opened,
        focusedElementId: state.focusedElementId,
        dispatch,
        reduceMotion: hasReduceMotion,
      }}
    >
      <div
        ref={wrapperRef}
        className={cx(spaceClass, className)}
        data-allow-multiple={allowMultiple}
        data-allow-toggle={!allowMultiple}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
