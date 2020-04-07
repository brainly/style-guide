import React from 'react';
import ActionList, {DIRECTION, ALIGNMENT} from './ActionList';
import ActionListHole from './ActionListHole';
import {shallow} from 'enzyme';
import Button from 'buttons/Button';

describe('ActionList', () => {
  test('render', () => {
    const actionList = shallow(
      <ActionList>
        <ActionListHole>
          <Button type="solid">accept</Button>
        </ActionListHole>
        <ActionListHole>
          <Button type="solid-inverse">accept</Button>
        </ActionListHole>
      </ActionList>
    );

    expect(actionList.hasClass('sg-actions-list')).toEqual(true);
  });

  test('to-right', () => {
    const actionList = shallow(<ActionList direction={DIRECTION.TO_RIGHT} />);

    expect(actionList.hasClass('sg-actions-list--to-right')).toEqual(true);
  });

  test('to-top', () => {
    const actionList = shallow(<ActionList toTop />);

    expect(actionList.hasClass('sg-actions-list--to-top')).toEqual(true);
  });

  test('baseline', () => {
    const actionList = shallow(<ActionList align={ALIGNMENT.BASELINE} />);

    expect(actionList.hasClass('sg-actions-list--align-baseline')).toEqual(
      true
    );
  });

  test('centered', () => {
    const actionList = shallow(<ActionList direction={DIRECTION.CENTERED} />);

    expect(actionList.hasClass('sg-actions-list--centered')).toEqual(true);
  });

  test('space-between', () => {
    const actionList = shallow(
      <ActionList direction={DIRECTION.SPACE_BETWEEN} />
    );

    expect(actionList.hasClass('sg-actions-list--space-between')).toEqual(true);
  });

  test('space-around', () => {
    const actionList = shallow(
      <ActionList direction={DIRECTION.SPACE_AROUND} />
    );

    expect(actionList.hasClass('sg-actions-list--space-around')).toEqual(true);
  });

  test('space-evenly', () => {
    const actionList = shallow(
      <ActionList direction={DIRECTION.SPACE_EVENLY} />
    );

    expect(actionList.hasClass('sg-actions-list--space-evenly')).toEqual(true);
  });

  test('no-wrap', () => {
    const actionList = shallow(<ActionList noWrap />);

    expect(actionList.hasClass('sg-actions-list--no-wrap')).toEqual(true);
  });
});
