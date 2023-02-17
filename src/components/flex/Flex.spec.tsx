import * as React from 'react';
import {render} from '@testing-library/react';
import Flex, {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  FLEX_MARGINS,
} from './Flex';
import {testA11y} from '../../axe';

describe('Flex', () => {
  const children = <div>Text</div>;

  it('renders', () => {
    expect(() => render(<Flex>{children}</Flex>)).not.toThrow();
  });

  it('direction is responsive prop', () => {
    const component = render(
      <Flex
        direction={[
          FLEX_DIRECTION.COLUMN,
          FLEX_DIRECTION.COLUMN_REVERSE,
          null,
          FLEX_DIRECTION.ROW,
        ]}
      >
        {children}
      </Flex>
    );

    [
      'sg-flex--column',
      'md:sg-flex--column-reverse',
      'xl:sg-flex--row',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('inlineFlex is responsive prop', () => {
    const component = render(
      <Flex inlineFlex={[true, false, null, false]}>{children}</Flex>
    );

    ['sg-flex--inline', 'md:sg-flex--flex', 'xl:sg-flex--flex'].forEach(
      className => {
        expect(
          component.container.firstElementChild.classList.contains(className)
        ).toEqual(true);
      }
    );
  });

  it('justifyContent is responsive prop', () => {
    const component = render(
      <Flex
        justifyContent={[
          FLEX_JUSTIFY_VALUES.FLEX_END,
          FLEX_JUSTIFY_VALUES.FLEX_START,
          null,
          FLEX_JUSTIFY_VALUES.SPACE_BETWEEN,
        ]}
      >
        {children}
      </Flex>
    );

    [
      'sg-flex--justify-content-flex-end',
      'md:sg-flex--justify-content-flex-start',
      'xl:sg-flex--justify-content-space-between',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('alignItems is responsive prop', () => {
    const component = render(
      <Flex
        alignItems={[
          FLEX_ALIGNMENT_VALUES.CENTER,
          FLEX_ALIGNMENT_VALUES.FLEX_END,
          null,
          FLEX_ALIGNMENT_VALUES.FLEX_START,
        ]}
      >
        {children}
      </Flex>
    );

    [
      'sg-flex--align-items-center',
      'md:sg-flex--align-items-flex-end',
      'xl:sg-flex--align-items-flex-start',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('margin is responsive prop', () => {
    const component = render(
      <Flex
        margin={[
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ]}
      >
        {children}
      </Flex>
    );

    [
      'sg-flex--margin-xs',
      'md:sg-flex--margin-xxl',
      'xl:sg-flex--margin-xxxxl',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('marginTop is responsive prop', () => {
    const component = render(
      <Flex
        marginTop={[
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ]}
      >
        {children}
      </Flex>
    );

    [
      'sg-flex--margin-top-xs',
      'md:sg-flex--margin-top-xxl',
      'xl:sg-flex--margin-top-xxxxl',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('marginRight is responsive prop', () => {
    const component = render(
      <Flex
        marginRight={[
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ]}
      >
        {children}
      </Flex>
    );

    [
      'sg-flex--margin-right-xs',
      'md:sg-flex--margin-right-xxl',
      'xl:sg-flex--margin-right-xxxxl',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('marginBottom is responsive prop', () => {
    const component = render(
      <Flex
        marginBottom={[
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ]}
      >
        {children}
      </Flex>
    );

    [
      'sg-flex--margin-bottom-xs',
      'md:sg-flex--margin-bottom-xxl',
      'xl:sg-flex--margin-bottom-xxxxl',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('marginLeft is responsive prop', () => {
    const component = render(
      <Flex
        marginLeft={[
          FLEX_MARGINS.XSMALL,
          FLEX_MARGINS.XXLARGE,
          null,
          FLEX_MARGINS.XXXXLARGE,
        ]}
      >
        {children}
      </Flex>
    );

    [
      'sg-flex--margin-left-xs',
      'md:sg-flex--margin-left-xxl',
      'xl:sg-flex--margin-left-xxxxl',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('renders component with different html tag', () => {
    const component = render(
      <Flex htmlTag="ul">
        <div>test</div>
      </Flex>
    );

    expect(component.getByRole('list')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(
        <Flex>
          <div>item</div>
        </Flex>
      );
    });
  });
});
