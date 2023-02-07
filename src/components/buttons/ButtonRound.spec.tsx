import * as React from 'react';
import ButtonRound from './ButtonRound';
import {render, fireEvent} from '@testing-library/react';

describe('ButtonRound', () => {
  test('render', () => {
    const button = render(<ButtonRound>Some text</ButtonRound>);

    expect(
      button.container.firstElementChild.classList.contains(
        'sg-button-solid-round'
      )
    ).toEqual(true);
  });

  test('href', () => {
    const href = '#test';
    const button = render(<ButtonRound href={href}>Some text</ButtonRound>);

    expect(button.container.firstElementChild.getAttribute('href')).toEqual(
      href
    );
  });

  test('label', () => {
    const label = 'example label';
    const button = render(<ButtonRound label={label}>Some text</ButtonRound>);

    expect(button.queryByText(label)).toBeTruthy();
  });

  test('onClick is fired on mouse click', () => {
    const onClick = jest.fn();

    const button = render(
      // eslint-disable-next-line react/jsx-no-bind
      <ButtonRound onClick={onClick}>Some text</ButtonRound>
    );

    fireEvent.click(button.queryByRole('link'));
    expect(onClick).toHaveBeenCalled();
  });
});
