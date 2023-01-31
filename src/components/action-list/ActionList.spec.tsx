import * as React from 'react';
import ActionList, {DIRECTION, ALIGNMENT} from './ActionList';
import ActionListHole from './ActionListHole';
import Button from 'buttons/Button';
import {render} from '@testing-library/react';

describe('ActionList', () => {
  test('render', () => {
    const actionList = render(
      <ActionList>
        <ActionListHole>
          <Button variant="solid">accept</Button>
        </ActionListHole>
        <ActionListHole>
          <Button variant="solid-inverted">accept</Button>
        </ActionListHole>
      </ActionList>
    );
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list')).toEqual(true);
  });

  test('to-right', () => {
    const actionList = render(<ActionList direction={DIRECTION.TO_RIGHT} />);
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list--to-right')).toEqual(true);
  });

  test('to-top', () => {
    const actionList = render(<ActionList toTop />);
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list--to-top')).toEqual(true);
  });

  test('baseline', () => {
    const actionList = render(<ActionList align={ALIGNMENT.BASELINE} />);
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list--align-baseline')).toEqual(
      true
    );
  });

  test('centered', () => {
    const actionList = render(<ActionList direction={DIRECTION.CENTERED} />);
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list--centered')).toEqual(true);
  });

  test('space-between', () => {
    const actionList = render(
      <ActionList direction={DIRECTION.SPACE_BETWEEN} />
    );
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list--space-between')).toEqual(
      true
    );
  });

  test('space-around', () => {
    const actionList = render(
      <ActionList direction={DIRECTION.SPACE_AROUND} />
    );
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list--space-around')).toEqual(
      true
    );
  });

  test('space-evenly', () => {
    const actionList = render(
      <ActionList direction={DIRECTION.SPACE_EVENLY} />
    );
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list--space-evenly')).toEqual(
      true
    );
  });

  test('no-wrap', () => {
    const actionList = render(<ActionList noWrap />);
    const root = actionList.container.firstElementChild;

    expect(root.classList.contains('sg-actions-list--no-wrap')).toEqual(true);
  });
});
