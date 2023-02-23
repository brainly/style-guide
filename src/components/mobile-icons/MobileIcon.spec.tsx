import * as React from 'react';
import MobileIcon, {TYPE} from './MobileIcon';
import {render} from '@testing-library/react';

it('render if type', () => {
  const icon = render(<MobileIcon type={TYPE.ANSWER_BUBBLE} />);

  expect(icon.container.firstElementChild.tagName).toEqual('svg');
  expect(icon.container.firstElementChild.querySelector('use')).toBeTruthy();
});

it('other props', () => {
  const type = TYPE.ANSWER_BUBBLE;
  const icon = render(<MobileIcon type={type} data-testid="foo" />);

  expect(icon.getByTestId('foo')).toBeTruthy();
});
