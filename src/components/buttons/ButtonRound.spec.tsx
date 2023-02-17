import * as React from 'react';
import ButtonRound from './ButtonRound';
import {render, fireEvent} from '@testing-library/react';

describe('ButtonRound', () => {
  it('render', () => {
    const button = render(<ButtonRound>Some text</ButtonRound>);

    expect(button.getByText('Some text')).toBeTruthy();
  });

  it('href', () => {
    const href = '#test';
    const button = render(<ButtonRound href={href}>Some text</ButtonRound>);

    expect(button.getByRole('link').getAttribute('href')).toEqual(href);
  });

  it('label', () => {
    const label = 'example label';
    const button = render(<ButtonRound label={label}>Some text</ButtonRound>);

    expect(button.queryByText(label)).toBeTruthy();
  });

  it('onClick is fired on mouse click', () => {
    const onClick = jest.fn();

    const button = render(
      // eslint-disable-next-line react/jsx-no-bind
      <ButtonRound onClick={onClick}>Some text</ButtonRound>
    );

    fireEvent.click(button.getByRole('link'));
    expect(onClick).toHaveBeenCalled();
  });
});
