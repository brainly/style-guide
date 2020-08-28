import React from 'react';
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
});
