//@flow strict

import React, {createContext, useReducer} from 'react';
import cx from 'classnames';

type StateType = $ReadOnly<{
  opened: {
    [key: string]: boolean,
  },
}>;

type ActionType = {
  type: 'accordion/SET_OPENED',
  payload: {id: string, value: boolean},
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
}: PropType) => {
  const [state, dispatch] = useReducer<StateType, ActionType>(reducer, {
    opened: {},
    focused: ''
  });

  function reducer(state: StateType, action: ActionType): StateType {
    switch (action.type) {
      case 'accordion/SET_OPENED': {
        const {opened} = state;
        const {id, value} = action.payload;

        return {
          ...state,
          opened: allowMultiple ? {...opened, [id]: value} : {[id]: value},
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
      value={{noGapBetweenElements, opened: state.opened, dispatch}}
    >
      <div
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
