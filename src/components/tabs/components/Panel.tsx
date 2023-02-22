import * as React from 'react';
import Flex, {FlexPropsType} from '../../flex/Flex';
import classnames from 'classnames';
import {useTabsContext} from '../hooks';
import type {WithChildren} from './Tab';

export type PanelElement = HTMLDivElement | undefined;
export type TabPanelProps = WithChildren & FlexPropsType;

export const Panel = ({children, ...rest}: TabPanelProps) => {
  const {activePanel, registerPanel, a11yHelpers} = useTabsContext();
  const panelRef = React.useRef<PanelElement>();
  const {id, labelledBy} = a11yHelpers.getPanelHelpers(panelRef.current);
  const callbackRef = React.useCallback((panel: PanelElement | null) => {
    if (panel) {
      panelRef.current = panel;
      registerPanel(panel);
    }
  }, []);
  const isActive = panelRef.current === activePanel;

  return (
    <Flex
      {...rest}
      id={id}
      className={classnames({
        'sg-tabs__panel--hidden': !isActive,
      })}
      ref={callbackRef}
      role="tabpanel"
      aria-labelledby={labelledBy}
      suppressHydrationWarning
    >
      {children}
    </Flex>
  );
};
