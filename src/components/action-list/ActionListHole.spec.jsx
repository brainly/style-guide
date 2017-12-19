import React from 'react';
import ActionListHole from './ActionListHole';
import {shallow} from 'enzyme';
import ButtonSecondary, {BUTTON_SECONDARY_TYPE} from 'buttons/ButtonSecondary';

describe('ActionListHole', () => {
  test('render', () => {
    const actionListHole = shallow(
      <ActionListHole>
        <ButtonSecondary buttonType={BUTTON_SECONDARY_TYPE.alt} small>
          accept
        </ButtonSecondary>
      </ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole')).toEqual(true);
  });

  test('container', () => {
    const actionListHole = shallow(
      <ActionListHole asContainer>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--container')).toEqual(true);
  });

  test('no-spacing', () => {
    const actionListHole = shallow(
      <ActionListHole noSpacing>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--no-spacing')).toEqual(true);
  });

  test('no-shrink', () => {
    const actionListHole = shallow(
      <ActionListHole noShrink>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--no-shrink')).toEqual(true);
  });

  test('grow', () => {
    const actionListHole = shallow(
      <ActionListHole grow>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--grow')).toEqual(true);
  });

  test('to-end', () => {
    const actionListHole = shallow(
      <ActionListHole toEnd>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--to-end')).toEqual(true);
  });

  test('to-right', () => {
    const actionListHole = shallow(
      <ActionListHole toRight>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--to-right')).toEqual(true);
  });
});
