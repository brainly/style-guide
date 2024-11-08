import * as React from 'react';
import ActionListHole, {ACTION_LIST_HOLE_SPACING} from './ActionListHole';
import {render} from '@testing-library/react';
import Button from 'buttons/Button';

describe('<ActionListHole />', () => {
  it('render', () => {
    const actionListHole = render(
      <ActionListHole>
        <Button variant="solid" size="s">
          accept
        </Button>
      </ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole'
      )
    ).toEqual(true);
  });

  it('container', () => {
    const actionListHole = render(
      <ActionListHole asContainer>test</ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--container'
      )
    ).toEqual(true);
  });
  it('no-spacing', () => {
    const actionListHole = render(
      <ActionListHole noSpacing>test</ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--no-spacing'
      )
    ).toEqual(true);
  });
  it('space-bellow', () => {
    const actionListHole = render(
      <ActionListHole spaceBellow>test</ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--space-bellow'
      )
    ).toEqual(true);
  });
  it('no-shrink', () => {
    const actionListHole = render(
      <ActionListHole noShrink>test</ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--no-shrink'
      )
    ).toEqual(true);
  });
  it('grow', () => {
    const actionListHole = render(<ActionListHole grow>test</ActionListHole>);

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--grow'
      )
    ).toEqual(true);
  });
  it('to-end', () => {
    const actionListHole = render(<ActionListHole toEnd>test</ActionListHole>);

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--to-end'
      )
    ).toEqual(true);
  });
  it('to-right', () => {
    const actionListHole = render(
      <ActionListHole toRight>test</ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--to-right'
      )
    ).toEqual(true);
  });
  it('to-right', () => {
    const actionListHole = render(
      <ActionListHole toRight>test</ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--to-right'
      )
    ).toEqual(true);
  });
  it('spaced-small', () => {
    const actionListHole = render(
      <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.SMALL}>
        test
      </ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--spaced-small'
      )
    ).toEqual(true);
  });
  it('spaced-xsmall', () => {
    const actionListHole = render(
      <ActionListHole spacing={ACTION_LIST_HOLE_SPACING.XSMALL}>
        test
      </ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--spaced-xsmall'
      )
    ).toEqual(true);
  });
  it('equal-width', () => {
    const actionListHole = render(
      <ActionListHole equalWidth>test</ActionListHole>
    );

    expect(
      // @ts-expect-error TS18047
      actionListHole.container.firstElementChild.classList.contains(
        'sg-actions-list__hole--equal-width'
      )
    ).toEqual(true);
  });
});
