import {createContext, useContext} from 'react';
import type {Context} from './Tabs';

export const TabContext = createContext<Context>({} as Context);

export const useTabsContext = () => {
  const tabsContext = useContext(TabContext);
  if (!tabsContext) {
    throw new Error('useTabContext must be used within TabContextProvider');
  }
  return tabsContext;
};
