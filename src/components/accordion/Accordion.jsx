//@flow strict

import React, {createContext, useCallback, useState} from 'react';
import cx from 'classnames';

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

type OpenedMapType = {
  [key: string]: boolean,
  ...,
};

type AccordionContextType = {
  opened: OpenedMapType,
  onChange: (item: string, value: boolean) => void,
  noGapBetweenElements: boolean,
};

export const AccordionContext = createContext<AccordionContextType>({
  opened: {},
  onChange: () => undefined,
  noGapBetweenElements: false,
});

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
  const [opened, setOpened] = useState({});

  const handleChange = useCallback(
    (item: string, value: boolean) => {
      if (allowMultiple) {
        setOpened({...opened, [item]: value});
      } else {
        const newOpened = {...opened};

        Object.keys(newOpened).forEach(i => (newOpened[i] = false));
        setOpened({...newOpened, [item]: value});
      }
    },
    [opened, allowMultiple]
  );

  const context = {
    onChange: handleChange,
    opened,
    noGapBetweenElements: spacing === 'none',
  };

  const classes = cx(
    {
      [`${spaceClasses[spacing]}`]:
        spacing === 'none' ? undefined : spaceClasses[spacing],
    },
    className
  );

  return (
    <AccordionContext.Provider value={context}>
      <div className={classes}>{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
