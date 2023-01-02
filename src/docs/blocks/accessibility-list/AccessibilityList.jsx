// @flow

import * as React from 'react';
import {styled} from '@storybook/theming';
import {AccessibilityListItem} from './AccessibilityListItem';
import type {RuleType} from './AccessibilityListItem';

const Ul = styled.ul({listStyle: 'none', padding: '0', margin: '16px 0'});

type AccessibilityListPropsType = {
  rules: Array<RuleType>,
};

const statusValue = {
  'TO DO': 1,
  'IN PROGRESS': 1,
  DONE: 0,
  'N/A': 2,
};

export const AccessibilityList = ({rules}: AccessibilityListPropsType) => {
  const sortedRules = rules.sort(
    (a, b) => statusValue[a.status] - statusValue[b.status]
  );

  return (
    <Ul role="list">
      {sortedRules.map(item => (
        <AccessibilityListItem {...item} key={item.pattern} />
      ))}
    </Ul>
  );
};
