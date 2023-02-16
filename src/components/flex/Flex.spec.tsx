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
  it('direction is responsive prop', () => {
    const component = shallow(
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

    expect(
      component.hasClass(
        'sg-flex--column md:sg-flex--column-reverse xl:sg-flex--row'
      )
    ).toEqual(true);
  });
  it('renders inline flex', () => {
    const component = shallow(<Flex inlineFlex>{children}</Flex>);

    expect(component.hasClass('sg-flex--inline')).toEqual(true);
  });
  it('inlineFlex is responsive prop', () => {
    const component = shallow(
      <Flex inlineFlex={[true, false, null, false]}>{children}</Flex>
    );

    expect(
      component.hasClass('sg-flex--inline md:sg-flex--flex xl:sg-flex--flex')
    ).toEqual(true);
  });
  it('renders component with proper flex justify property', () => {
    const component = shallow(
      <Flex justifyContent={FLEX_JUSTIFY_VALUES.FLEX_START}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--justify-content-flex-start')).toEqual(
      true
    );
  });
  it('justifyContent is responsive prop', () => {
    const component = shallow(
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

    expect(
      component.hasClass(
        // eslint-disable-next-line max-len
        'sg-flex--justify-content-flex-end md:sg-flex--justify-content-flex-start xl:sg-flex--justify-content-space-between'
      )
    ).toEqual(true);
  });
  it('renders component with proper flex align property', () => {
    const component = shallow(
      <Flex alignItems={FLEX_ALIGNMENT_VALUES.CENTER}>{children}</Flex>
    );

    expect(component.hasClass('sg-flex--align-items-center')).toEqual(true);
  });
  it('alignItems is responsive prop', () => {
    const component = shallow(
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

    expect(
      component.hasClass(
        'sg-flex--align-items-center md:sg-flex--align-items-flex-end xl:sg-flex--align-items-flex-start'
      )
    ).toEqual(true);
  });
  test.each(Object.values(FLEX_MARGINS))(
    'when margin prop is %i, class sg-flex--margin-%i should exist',
    margin => {
      const component = shallow(<Flex margin={margin}>{children}</Flex>);

      expect(component.hasClass(`sg-flex--margin-${margin}`)).toEqual(true);
    }
  );
  it('margin is responsive prop', () => {
    const component = shallow(
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

    expect(
      component.hasClass(
        'sg-flex--margin-xs md:sg-flex--margin-xxl xl:sg-flex--margin-xxxxl'
      )
    ).toEqual(true);
  });
  test.each(Object.values(FLEX_MARGINS))(
    'when marginTop prop is %i, class sg-flex--margin-top-%i should exist',
    margin => {
      const component = shallow(<Flex marginTop={margin}>{children}</Flex>);

      expect(component.hasClass(`sg-flex--margin-top-${margin}`)).toEqual(true);
    }
  );
  it('marginTop is responsive prop', () => {
    const component = shallow(
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

    expect(
      component.hasClass(
        'sg-flex--margin-top-xs md:sg-flex--margin-top-xxl xl:sg-flex--margin-top-xxxxl'
      )
    ).toEqual(true);
  });
  test.each(Object.values(FLEX_MARGINS))(
    'when marginRight prop is %i, class sg-flex--margin-right-%i should exist',
    margin => {
      const component = shallow(<Flex marginRight={margin}>{children}</Flex>);

      expect(component.hasClass(`sg-flex--margin-right-${margin}`)).toEqual(
        true
      );
    }
  );
  it('marginRight is responsive prop', () => {
    const component = shallow(
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

    expect(
      component.hasClass(
        'sg-flex--margin-right-xs md:sg-flex--margin-right-xxl xl:sg-flex--margin-right-xxxxl'
      )
    ).toEqual(true);
  });
  test.each(Object.values(FLEX_MARGINS))(
    'when marginBottom prop is %i, class sg-flex--margin-bottom-%i should exist',
    margin => {
      const component = shallow(<Flex marginBottom={margin}>{children}</Flex>);

      expect(component.hasClass(`sg-flex--margin-bottom-${margin}`)).toEqual(
        true
      );
    }
  );
  it('marginBottom is responsive prop', () => {
    const component = shallow(
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

    expect(
      component.hasClass(
        'sg-flex--margin-bottom-xs md:sg-flex--margin-bottom-xxl xl:sg-flex--margin-bottom-xxxxl'
      )
    ).toEqual(true);
  });
  test.each(Object.values(FLEX_MARGINS))(
    'when marginLeft prop is %i, class sg-flex--margin-left-%i should exist',
    margin => {
      const component = shallow(<Flex marginLeft={margin}>{children}</Flex>);

      expect(component.hasClass(`sg-flex--margin-left-${margin}`)).toEqual(
        true
      );
    }
  );
  it('marginLeft is responsive prop', () => {
    const component = shallow(
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

    expect(
      component.hasClass(
        'sg-flex--margin-left-xs md:sg-flex--margin-left-xxl xl:sg-flex--margin-left-xxxxl'
      )
    ).toEqual(true);
  });
  it('renders component with different html tag', () => {
    const component = shallow(
      <Flex as="ul">
        <div>test</div>
      </Flex>
    );

    expect(component.find('div').parent().is('ul')).toEqual(true);
  });
});
