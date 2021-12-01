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
import {__DEV__, invariant} from '../utils';

export const KEY_CODES = {
  '32': 'space',
  '13': 'enter',
};

type ExpandedItemsType = Array<string>;

type StateType = $ReadOnly<{
  expanded: ExpandedItemsType,
  focusedElementId: string | null,
}>;

type ActionType =
  | {
      type: 'accordion/SET_EXPANDED',
      payload: {expanded: ExpandedItemsType},
    }
  | {type: 'accordion/KEYBOARD_SET_EXPANDED'}
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
  expanded?: string | Array<string>,
  defaultExpanded?: string | Array<string>,
  onChange?: string => void,
}>;

type ContextType = {
  noGapBetweenElements: boolean,
  expanded: ExpandedItemsType,
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
  defaultExpanded,
  expanded,
  onChange,
}: AccordionPropsType) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isControlled = expanded !== undefined;
  const {current: wasControlled} = useRef<boolean>(isControlled);

  if (__DEV__) {
    invariant(
      !(isControlled && !onChange),
      // eslint-disable-next-line max-len
      'You provided an `expanded` prop to an Accordion without an `onChange` handler. Users won`t be able to switch between expanded/collapsed state.'
    );

    invariant(
      !(wasControlled && !isControlled),
      'You cannot change Accordion component from controlled to uncontrolled variant.'
    );

    invariant(
      !(!wasControlled && isControlled),
      'You cannot change Accordion component from uncontrolled to controlled variant.'
    );

    invariant(
      !(isControlled && allowMultiple),
      'allowMultiple is not working in controlled Accordion'
    );

    invariant(
      !(
        !allowMultiple &&
        Array.isArray(defaultExpanded) &&
        defaultExpanded.length > 1
      ),
      // eslint-disable-next-line max-len
      'defaultExpanded is an array with more than 1 element but allowMultiple prop is not set. The first value from the array was picked as a default expanded. Set allowMultiple attribute or provide only one default expanded.'
    );
  }

  const getUpdatedOpenedItems = useCallback(
    (expanded: ExpandedItemsType, id: string, value: boolean) => {
      if (value) {
        return allowMultiple ? [...new Set([...expanded, id])] : [id];
      }
      return allowMultiple ? expanded.filter(item => item !== id) : [];
    },
    [allowMultiple]
  );

  const [state, dispatch] = useReducer(reducer, null, () => {
    if (isControlled) {
      return {
        expanded: [],
        focusedElementId: null,
      };
    }

    if (defaultExpanded !== undefined) {
      const expandedArray = Array.isArray(defaultExpanded)
        ? defaultExpanded
        : [defaultExpanded];

      const newState = expandedArray.filter(
        (item, idx) => allowMultiple || idx < 1
      );

      return {
        expanded: newState,
        focusedElementId: null,
      };
    }

    return {
      expanded: [],
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

        dispatch({type: 'accordion/KEYBOARD_SET_EXPANDED'});
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
      case 'accordion/SET_EXPANDED': {
        const {expanded} = action.payload;

        return {
          ...state,
          expanded,
        };
      }

      case 'accordion/KEYBOARD_SET_EXPANDED': {
        const {expanded, focusedElementId} = state;

        if (focusedElementId === null) return state;

        return {
          ...state,
          expanded: getUpdatedOpenedItems(
            state.expanded,
            focusedElementId,
            !expanded.includes(focusedElementId)
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

  const [prevExpanded, setPrevExpanded] = useState();

  if (isControlled && expanded !== prevExpanded) {
    setPrevExpanded(expanded);

    // expanded || '' is to satisfy flow.
    // isControlled flag is true when expanded !== undefined but this condition is not interpreted
    // correctly by flow causing type error. Replacing isControlled with expanded !== undefined would work but using isControlled is more clear
    const expandedArray = Array.isArray(expanded) ? expanded : [expanded || ''];

    dispatch({
      type: 'accordion/SET_EXPANDED',
      payload: {expanded: expandedArray},
    });
  }

  const noGapBetweenElements = spacing === 'none';
  const spaceClass = spacing === 'none' ? undefined : spaceClasses[spacing];

  const onItemSelect = useCallback(
    (id, value) => {
      onChange && onChange(id);

      if (!isControlled) {
        dispatch({
          type: 'accordion/SET_EXPANDED',
          payload: {
            expanded: getUpdatedOpenedItems(state.expanded, id, value),
          },
        });
      }
    },
    [getUpdatedOpenedItems, isControlled, onChange, state.expanded]
  );

  const context = useMemo(
    () => ({
      noGapBetweenElements,
      expanded: state.expanded,
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
      state.expanded,
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
