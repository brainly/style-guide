import * as React from 'react';
import Text from './Text';
import {
  TEXT_AS,
  TEXT_SIZE,
  TEXT_WEIGHT,
  TEXT_TRANSFORM,
  TEXT_ALIGN,
  TEXT_WHITE_SPACE,
} from './textConsts';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Text', () => {
  it('render', () => {
    const text = render(<Text>Test</Text>);

    expect(text.queryByText('Test')).toBeTruthy();
  });

  it('size is responsive prop', () => {
    const component = render(
      <Text
        size={[TEXT_SIZE.SMALL, TEXT_SIZE.XXLARGE, null, TEXT_SIZE.XXXLARGE]}
      >
        Test
      </Text>
    );

    ['sg-text--small', 'md:sg-text--xxlarge', 'xl:sg-text--xxxlarge'].forEach(
      className => {
        expect(
          component.container.firstElementChild.classList.contains(className)
        ).toEqual(true);
      }
    );
  });

  it('type', () => {
    const text = 'random text';
    const component = render(<Text as={TEXT_AS.SPAN}>{text}</Text>);

    expect(component.queryByText(text).tagName).toEqual('SPAN');
  });

  it('weight is responsive prop', () => {
    const component = render(
      <Text weight={[TEXT_WEIGHT.BOLD, null, TEXT_WEIGHT.REGULAR]}>Test</Text>
    );

    ['sg-text--bold', 'lg:sg-text--regular'].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('transform is responsive prop', () => {
    const component = render(
      <Text
        transform={[TEXT_TRANSFORM.UPPERCASE, null, TEXT_TRANSFORM.LOWERCASE]}
      >
        Test
      </Text>
    );

    ['sg-text--uppercase', 'lg:sg-text--lowercase'].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('align is responsive prop', () => {
    const component = render(
      <Text align={[TEXT_ALIGN.JUSTIFY, null, TEXT_ALIGN.CENTER]}>Test</Text>
    );

    ['sg-text--justify', 'lg:sg-text--to-center'].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('full is responsive prop', () => {
    const component = render(<Text full={[true, null, false]}>Test</Text>);

    ['sg-text--full', 'lg:sg-text--auto'].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('whiteSpace is responsive prop', () => {
    const component = render(
      <Text whiteSpace={[TEXT_WHITE_SPACE.NORMAL, TEXT_WHITE_SPACE.PRE_LINE]}>
        Test
      </Text>
    );

    ['sg-text--white-space-normal', 'md:sg-text--pre-line'].forEach(
      className => {
        expect(
          component.container.firstElementChild.classList.contains(className)
        ).toEqual(true);
      }
    );
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Text>Read more</Text>);
    });
  });
});
