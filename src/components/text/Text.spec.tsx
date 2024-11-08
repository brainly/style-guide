import * as React from 'react';
import Text from './Text';
import {TEXT_AS} from './textConsts';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Text', () => {
  it('render', () => {
    const text = render(<Text>Test</Text>);

    expect(text.queryByText('Test')).toBeTruthy();
  });

  it('type', () => {
    const text = 'random text';
    const component = render(<Text as={TEXT_AS.SPAN}>{text}</Text>);

    // @ts-expect-error TS2531
    expect(component.queryByText(text).tagName).toEqual('SPAN');
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Text>Read more</Text>);
    });
  });
});
