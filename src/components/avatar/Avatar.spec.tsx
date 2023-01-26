import * as React from 'react';
import Avatar from './Avatar';
import {render} from '@testing-library/react';

test('render default', () => {
  const avatar = render(<Avatar />);

  expect(avatar.getByRole('img', {hidden: true})).toBeTruthy();
});

test('render with image', () => {
  const imgSrc = 'https://source.unsplash.com/100x100/?man';
  const avatar = render(<Avatar imgSrc={imgSrc} />);

  const img = avatar.getByRole('img', {hidden: true});

  expect(img.getAttribute('src')).toBe(
    'https://source.unsplash.com/100x100/?man'
  );
});

test('link', () => {
  const avatar = render(<Avatar link="https://brainly.com" />);

  expect(avatar.getByRole('link')).toBeTruthy();
});
