import * as React from 'react';
import Text from './Text';
import {
  TEXT_TYPE,
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

  it('size', () => {
    const text = render(<Text size={TEXT_SIZE.XLARGE}>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--xlarge')
    ).toBeTruthy();
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
    const component = render(<Text type={TEXT_TYPE.SPAN}>{text}</Text>);

    expect(component.queryByText(text).tagName).toEqual('SPAN');
  });

  it('color', () => {
    const text = render(<Text color="text-green-60">Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains(
        'sg-text--text-green-60'
      )
    ).toBeTruthy();
  });

  it('weight', () => {
    const text = render(<Text weight={TEXT_WEIGHT.BOLD}>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--bold')
    ).toBeTruthy();
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

  it('transform - uppercase', () => {
    const text = render(<Text transform={TEXT_TRANSFORM.UPPERCASE}>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--uppercase')
    ).toBeTruthy();
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

  it('transform - lowercase', () => {
    const text = render(<Text transform={TEXT_TRANSFORM.LOWERCASE}>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--lowercase')
    ).toBeTruthy();
  });

  it('transform - capitalize', () => {
    const text = render(
      <Text transform={TEXT_TRANSFORM.CAPITALIZE}>Test</Text>
    );

    expect(
      text.container.firstElementChild.classList.contains('sg-text--capitalize')
    ).toBeTruthy();
  });

  it('align - left', () => {
    const text = render(<Text align={TEXT_ALIGN.LEFT}>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--to-left')
    ).toBeTruthy();
  });

  it('align - center', () => {
    const text = render(<Text align={TEXT_ALIGN.CENTER}>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--to-center')
    ).toBeTruthy();
  });

  it('align - right', () => {
    const text = render(<Text align={TEXT_ALIGN.RIGHT}>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--to-right')
    ).toBeTruthy();
  });

  it('align - justify', () => {
    const text = render(<Text align={TEXT_ALIGN.JUSTIFY}>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--justify')
    ).toBeTruthy();
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

  it('full', () => {
    const text = render(<Text full>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--full')
    ).toBeTruthy();
  });

  it('full is responsive prop', () => {
    const component = render(<Text full={[true, null, false]}>Test</Text>);

    ['sg-text--full', 'lg:sg-text--auto'].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('asContainer', () => {
    const text = render(<Text asContainer>Test</Text>);

    expect(
      text.container.firstElementChild.classList.contains('sg-text--container')
    ).toBeTruthy();
  });

  it('whiteSpace', () => {
    const text1 = render(<Text whiteSpace="pre-wrap">Test</Text>);
    const text2 = render(<Text whiteSpace="pre-line">Test</Text>);

    expect(
      text1.container.firstElementChild.classList.contains('sg-text--pre-wrap')
    ).toBeTruthy();
    expect(
      text2.container.firstElementChild.classList.contains('sg-text--pre-line')
    ).toBeTruthy();
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
