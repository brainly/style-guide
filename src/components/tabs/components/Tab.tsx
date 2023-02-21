import * as React from 'react';
import Text from '../../text/Text';
import Flex, {FlexPropsType} from '../../flex/Flex';
import {useCallback, useRef} from 'react';
import classnames from 'classnames';
import {useTabsContext} from '../hooks';
import {Header} from './Header';
import {List} from './List';
import {ActiveIndicator} from './ActiveIndicator';
import {Panel} from './Panel';

type StyleType = {
  style?: Partial<
    React.CSSProperties & {
      '--inactive-text-color': string;
      '--active-text-color': string;
    }
  >;
};

export type WithChildren = {children: React.ReactNode};
export type TabElement = HTMLLIElement | undefined;
export type TabProps = WithChildren & FlexPropsType & StyleType;

export const Tab = ({children, className, disabled, ...rest}: TabProps) => {
  const {activeTab, registerTab, setActiveIndex, a11yHelpers} =
    useTabsContext();
  const tabRef = useRef<TabElement>();
  const callbackRef = useCallback((tab: TabElement | null) => {
    if (tab) {
      tabRef.current = tab;
      registerTab(tab);
    }
  }, []);

  const {id, controls} = a11yHelpers.getTabHelpers(tabRef.current);
  const isActive = activeTab !== undefined && tabRef.current === activeTab;

  return (
    <Flex
      {...rest}
      as="li"
      id={id}
      onClick={() => setActiveIndex(tabRef.current)}
      ref={callbackRef}
      className={classnames('sg-tabs__tab', className, {
        'sg-tabs__tab--disabled': disabled && !isActive,
      })}
      alignItems="center"
      role="tab"
      aria-selected={isActive}
      aria-controls={controls}
    >
      <Text
        className={classnames('sg-tabs__tab-text', {
          'sg-tabs__tab-text--active': isActive,
        })}
        weight="bold"
        size="small"
      >
        {children}
      </Text>
    </Flex>
  );
};

Tab.Header = Header;
Tab.List = List;
Tab.ActiveIndicator = ActiveIndicator;
Tab.Panel = Panel;
