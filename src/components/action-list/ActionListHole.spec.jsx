import React from 'react';
import ActionListHole, {ACTION_LIST_HOLE_SPACING} from './ActionListHole';
import {shallow} from 'enzyme';
import Button from 'buttons/Button';

describe('<ActionListHole />', () => {
  test('render', () => {
    const actionListHole = shallow(
      <ActionListHole>
        <Button type="solid" size="small">
          accept
        </Button>
      </ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole')).toEqual(true);
  });

  test('container', () => {
    const actionListHole = shallow(
      <ActionListHole asContainer>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--container')).toEqual(
      true
    );
  });

  test('no-spacing', () => {
    const actionListHole = shallow(
      <ActionListHole noSpacing>test</ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--no-spacing')
    ).toEqual(true);
  });

  test('space-bellow', () => {
    const actionListHole = shallow(
      <ActionListHole spaceBellow>test</ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--space-bellow')
    ).toEqual(true);
  });

  test('no-shrink', () => {
    const actionListHole = shallow(
      <ActionListHole noShrink>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--no-shrink')).toEqual(
      true
    );
  });

  test('grow', () => {
    const actionListHole = shallow(<ActionListHole grow>test</ActionListHole>);

    expect(actionListHole.hasClass('sg-actions-list__hole--grow')).toEqual(
      true
    );
  });

  test('to-end', () => {
    const actionListHole = shallow(<ActionListHole toEnd>test</ActionListHole>);

    expect(actionListHole.hasClass('sg-actions-list__hole--to-end')).toEqual(
      true
    );
  });

  test('to-right', () => {
    const actionListHole = shallow(
      <ActionListHole toRight>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--to-right')).toEqual(
      true
    );
  });

  test('to-right', () => {
    const actionListHole = shallow(
      <ActionListHole toRight>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--to-right')).toEqual(
      true
    );
  });

  test('spaced-small', () => {
    const actionListHole = shallow(
      <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.SMALL}>
        test
      </ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--spaced-small')
    ).toEqual(true);
  });

  test('spaced-xsmall', () => {
    const actionListHole = shallow(
      <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.XSMALL}>
        test
      </ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--spaced-xsmall')
    ).toEqual(true);
  });

  test('equal-width', () => {
    const actionListHole = shallow(
      <ActionListHole equalWidth>test</ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--equal-width')
    ).toEqual(true);
  });
});
