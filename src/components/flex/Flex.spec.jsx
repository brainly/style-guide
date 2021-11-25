import * as React from 'react';
import {shallow} from 'enzyme';

import Flex, {
  FLEX_DIRECTION,
  FLEX_JUSTIFY_VALUES,
  FLEX_ALIGNMENT_VALUES,
  FLEX_MARGINS,
} from './Flex';

describe('<Flex>', () => {
  const children = <div>Text</div>;

  it('renders without error', () => {
    shallow(<Flex>{children}</Flex>);
  });

  it('renders proper flex direction of flex', () => {
    const component = shallow(
      <Flex direction={FLEX_DIRECTION.COLUMN}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--column')).toEqual(true);
  });

  it('renders inline flex', () => {
    const component = shallow(<Flex inlineFlex>{children}</Flex>);

    expect(component.hasClass('sg-flex--inline')).toEqual(true);
  });

  it('renders component with proper flex justify property', () => {
    const component = shallow(
      <Flex justifyContent={FLEX_JUSTIFY_VALUES.FLEX_START}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--justify-content-flex-start')).toEqual(
      true
    );
  });

  it('renders component with proper flex align property', () => {
    const component = shallow(
      <Flex alignItems={FLEX_ALIGNMENT_VALUES.CENTER}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--align-items-center')).toEqual(true);
  });

  it('renders component with set margin', () => {
    const component = shallow(
      <Flex margin={FLEX_MARGINS.LARGE}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--margin-l')).toEqual(true);
  });

  it('renders component with set margin top', () => {
    const component = shallow(
      <Flex marginTop={FLEX_MARGINS.LARGE}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--margin-top-l')).toEqual(true);
  });

  it('renders component with set margin right', () => {
    const component = shallow(
      <Flex marginRight={FLEX_MARGINS.LARGE}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--margin-right-l')).toEqual(true);
  });

  it('renders component with set margin bottom', () => {
    const component = shallow(
      <Flex marginBottom={FLEX_MARGINS.LARGE}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--margin-bottom-l')).toEqual(true);
  });

  it('renders component with set margin left', () => {
    const component = shallow(
      <Flex marginLeft={FLEX_MARGINS.LARGE}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--margin-left-l')).toEqual(true);
  });

  it('renders component with different html tag', () => {
    const component = shallow(
      <Flex htmlTag="ul">
        <div>test</div>
      </Flex>
    );

    expect(
      component
        .find('div')
        .parent()
        .is('ul')
    ).toEqual(true);
  });

  it('renders responsive props passed as object', () => {
    const componentWithAllBreakpoints = shallow(
      <Flex
        fullWidth={{
          sm: true,
          md: false,
          lg: true,
          xl: true,
        }}
      >
        <div>test</div>
      </Flex>
    );

    const componentWithSomeBreakpoints = shallow(
      <Flex
        fullWidth={{
          sm: true,
          md: false,
          lg: true,
        }}
      >
        <div>test</div>
      </Flex>
    );

    const componentWithNoBreakpoints = shallow(
      <Flex fullWidth={{}}>
        <div>test</div>
      </Flex>
    );

    expect(
      componentWithAllBreakpoints.findWhere(
        node =>
          node.prop('className') ===
          'sg-flex sg-flex--full-width md:sg-flex--auto-width lg:sg-flex--full-width xl:sg-flex--full-width'
      )
    ).toHaveLength(1);

    expect(
      componentWithSomeBreakpoints.findWhere(
        node =>
          node.prop('className') ===
          'sg-flex sg-flex--full-width md:sg-flex--auto-width lg:sg-flex--full-width'
      )
    ).toHaveLength(1);

    expect(
      componentWithNoBreakpoints.findWhere(
        node => node.prop('className') === 'sg-flex'
      )
    ).toHaveLength(1);
  });

  it('renders responsive class names with prop passed as array', () => {
    const componentWithAllBreakpoints = shallow(
      <Flex fullWidth={[true, true, false, false]}>
        <div>test</div>
      </Flex>
    );

    const componentWithNullBreakpoints = shallow(
      <Flex fullWidth={[true, true, null, false]}>
        <div>test</div>
      </Flex>
    );

    const componentWithUndefinedBreakpoints = shallow(
      <Flex fullWidth={[true, true, undefined, false]}>
        <div>test</div>
      </Flex>
    );

    const componentWithSkippedBreakpoints = shallow(
      // eslint-disable-next-line no-sparse-arrays
      <Flex fullWidth={[true, true, , false]}>
        <div>test</div>
      </Flex>
    );

    const componentWithNoBreakpoints = shallow(
      <Flex fullWidth={[]}>
        <div>test</div>
      </Flex>
    );

    const componentWithTooManyBreakpoints = shallow(
      <Flex fullWidth={[true, true, false, false, true, true, true]}>
        <div>test</div>
      </Flex>
    );

    expect(
      componentWithAllBreakpoints.findWhere(
        node =>
          node.prop('className') ===
          'sg-flex sg-flex--full-width md:sg-flex--full-width lg:sg-flex--auto-width xl:sg-flex--auto-width'
      )
    ).toHaveLength(1);

    expect(
      componentWithNullBreakpoints.findWhere(
        node =>
          node.prop('className') ===
          'sg-flex sg-flex--full-width md:sg-flex--full-width xl:sg-flex--auto-width'
      )
    ).toHaveLength(1);

    expect(
      componentWithUndefinedBreakpoints.findWhere(
        node =>
          node.prop('className') ===
          'sg-flex sg-flex--full-width md:sg-flex--full-width xl:sg-flex--auto-width'
      )
    ).toHaveLength(1);

    expect(
      componentWithSkippedBreakpoints.findWhere(
        node =>
          node.prop('className') ===
          'sg-flex sg-flex--full-width md:sg-flex--full-width xl:sg-flex--auto-width'
      )
    ).toHaveLength(1);

    expect(
      componentWithNoBreakpoints.findWhere(
        node => node.prop('className') === 'sg-flex'
      )
    ).toHaveLength(1);

    expect(
      componentWithTooManyBreakpoints.findWhere(
        node =>
          node.prop('className') ===
          'sg-flex sg-flex--full-width md:sg-flex--full-width lg:sg-flex--auto-width xl:sg-flex--auto-width'
      )
    ).toHaveLength(1);
  });
});
