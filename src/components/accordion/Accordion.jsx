//@flow strict

import React, {createContext, useReducer} from 'react';
import cx from 'classnames';
import {accordionReducer} from './accordionReducer';

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
  const [state, dispatch] = useReducer(accordionReducer, {
    opened: {},
    noGapBetweenElements: spacing === 'none',
    allowMultiple,
  });

  const spaceClass = spacing === 'none' ? undefined : spaceClasses[spacing];

  return (
    <AccordionContext.Provider value={{state, dispatch}}>
      <div className={cx(spaceClass, className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
