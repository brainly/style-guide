import * as React from 'react';
import ActionListHole, {ACTION_LIST_HOLE_SPACING} from './ActionListHole';
import {render} from '@testing-library/react';
import Button from 'buttons/Button';

describe('<ActionListHole />', () => {
  test('render', () => {
    const actionListHole = render(
      <ActionListHole>
        <Button variant="solid" size="s">
          accept
        </Button>
      </ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole')).toEqual(true);
  });
  test('container', () => {
    const actionListHole = render(
      <ActionListHole asContainer>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--container')).toEqual(
      true
    );
  });
  test('no-spacing', () => {
    const actionListHole = render(
      <ActionListHole noSpacing>test</ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--no-spacing')
    ).toEqual(true);
  });
  test('space-bellow', () => {
    const actionListHole = render(
      <ActionListHole spaceBellow>test</ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--space-bellow')
    ).toEqual(true);
  });
  test('no-shrink', () => {
    const actionListHole = render(
      <ActionListHole noShrink>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--no-shrink')).toEqual(
      true
    );
  });
  test('grow', () => {
    const actionListHole = render(<ActionListHole grow>test</ActionListHole>);

    expect(actionListHole.hasClass('sg-actions-list__hole--grow')).toEqual(
      true
    );
  });
  test('to-end', () => {
    const actionListHole = render(<ActionListHole toEnd>test</ActionListHole>);

    expect(actionListHole.hasClass('sg-actions-list__hole--to-end')).toEqual(
      true
    );
  });
  test('to-right', () => {
    const actionListHole = render(
      <ActionListHole toRight>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--to-right')).toEqual(
      true
    );
  });
  test('to-right', () => {
    const actionListHole = render(
      <ActionListHole toRight>test</ActionListHole>
    );

    expect(actionListHole.hasClass('sg-actions-list__hole--to-right')).toEqual(
      true
    );
  });
  test('spaced-small', () => {
    const actionListHole = render(
      <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.SMALL}>
        test
      </ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--spaced-small')
    ).toEqual(true);
  });
  test('spaced-xsmall', () => {
    const actionListHole = render(
      <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.XSMALL}>
        test
      </ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--spaced-xsmall')
    ).toEqual(true);
  });
  test('equal-width', () => {
    const actionListHole = render(
      <ActionListHole equalWidth>test</ActionListHole>
    );

    expect(
      actionListHole.hasClass('sg-actions-list__hole--equal-width')
    ).toEqual(true);
  });
});
