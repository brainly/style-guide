/* eslint-disable no-redeclare */
/**
 * We need to disable no-redeclare as redeclaration allows us to use
 * TS overloading to type different usages scenarios
 */
import * as React from 'react';
import type {PanelElement, TabElement, WithChildren} from './components';
import {TabContext} from './hooks';

export type TabsProps = WithChildren & {
  onTabChange?: (currentActiveTab: TabElement) => void;
  startIndex?: number;
  activeIndex?: number;
};

export type Context = {
  activeTab: TabElement;
  activePanel: PanelElement;
  setActiveIndex: (tab: TabElement) => void;
  registerTab: (tab: TabElement) => void;
  registerPanel: (panel: PanelElement) => void;
  a11yHelpers: {
    getTabHelpers: (tab: TabElement) => {
      id: string;
      controls: string;
    };
    getPanelHelpers: (panel: PanelElement) => {
      id: string;
      labelledBy: string;
    };
  };
};

/**
 * Providing activeIndex turns Tabs into controlled component.
 * Because of that providing `startIndex` doesn't make sense
 * as component is controlled externally.
 */
function Tabs({
  children,
  onTabChange,
  activeIndex,
  ...rest
}: Omit<TabsProps, 'startIndex'>): JSX.Element;

/**
 * `startIndex` is exclusive to uncontrolled component, as
 * by default component handles tab change itself.
 * Because of that providing `activeIndex` to this component
 * is a mistake.
 */
function Tabs({
  children,
  onTabChange,
  startIndex,
  ...rest
}: Omit<TabsProps, 'activeIndex'>): JSX.Element;

function Tabs({
  children,
  onTabChange = () => undefined,
  startIndex = 0,
  activeIndex,
  ...rest
}: TabsProps) {
  const isControlledComponent = activeIndex !== undefined;
  const [tabs, setTabs] = React.useState<TabElement[]>([]);
  const [panels, setPanels] = React.useState<PanelElement[]>([]);
  const [currentSelectedIndex, setCurrentSelectedIndex] =
    React.useState(startIndex);

  const activeTab = tabs[currentSelectedIndex];
  const activePanel = panels[currentSelectedIndex];
  const setActiveIndex = (tab: TabElement) => {
    if (isControlledComponent) {
      return;
    }
    setCurrentSelectedIndex(tabs.indexOf(tab));
    onTabChange(tab);
  };

  const a11yHelpers = {
    getTabHelpers: (tab: TabElement) => {
      const currentTabIndex = tabs.indexOf(tab);

      return {
        id: `tab-${currentTabIndex}`,
        controls: `panel-${currentTabIndex}`,
      };
    },
    getPanelHelpers: (panel: PanelElement) => {
      const currentPanelIndex = panels.indexOf(panel);

      return {
        id: `panel-${currentPanelIndex}`,
        labelledBy: `tab-${currentPanelIndex}`,
      };
    },
  };

  const initialContextState: Context = {
    activeTab,
    activePanel,
    setActiveIndex,
    registerTab: React.useCallback(
      tab => setTabs(previousTabs => [...previousTabs, tab]),
      []
    ),
    registerPanel: React.useCallback(
      panel => setPanels(previousPanels => [...previousPanels, panel]),
      []
    ),
    a11yHelpers,
  };

  if (isControlledComponent && currentSelectedIndex !== activeIndex) {
    setCurrentSelectedIndex(activeIndex);
  }

  return (
    <TabContext.Provider value={initialContextState}>
      <section {...rest}>{children}</section>
    </TabContext.Provider>
  );
}

export {Tabs as default};
export {Tab} from './components';
