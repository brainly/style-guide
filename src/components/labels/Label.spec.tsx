import * as React from 'react';
import Label from './Label';
import {fireEvent, render} from '@testing-library/react';

describe('Label', () => {
  test('render', () => {
    const label = render(
      <Label type="default" color="blue">
        example label
      </Label>
    );

    expect(
      label.container.firstElementChild.classList.contains('sg-label')
    ).toBe(true);
    expect(
      label.container.firstElementChild.classList.contains('sg-label--blue-20')
    ).toBe(true);
  });

  test('render with icon', () => {
    const label = render(
      <Label type="default" iconType="star">
        example label
      </Label>
    );

    expect(label.queryByRole('img')).toBeTruthy();
  });

  test('render type solid', () => {
    const label = render(
      <Label type="solid" color="green">
        example label
      </Label>
    );

    expect(
      label.container.firstElementChild.classList.contains('sg-label--green-60')
    ).toBe(true);
  });

  test('when onClose is defined, has close button', () => {
    const mockCallback = jest.fn();
    const label = render(
      <Label type="default" color="green" onClose={mockCallback}>
        example label
      </Label>
    );

    expect(label.queryByRole('button', {name: 'close'})).toBeTruthy();
  });

  test('clicking on close button calls onClose', () => {
    const mockCallback = jest.fn();
    const label = render(
      <Label type="solid" color="green" onClose={mockCallback}>
        example label
      </Label>
    );
    const closeButton = label.queryByRole('button', {name: 'close'});

    fireEvent.click(closeButton);
    expect(mockCallback).toHaveBeenCalled();
  });
});
