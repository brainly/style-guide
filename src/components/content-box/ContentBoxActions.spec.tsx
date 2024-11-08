import * as React from 'react';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';
import ContentBoxActions from './ContentBoxActions';
import {render} from '@testing-library/react';

describe('<ContentBoxActions />', () => {
  it('renders', () => {
    const testBox = render(<ContentBoxActions>test</ContentBoxActions>);

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__actions'
      )
    ).toEqual(true);
  });

  it('has class that aligns elements to center', () => {
    const testBox = render(
      <ContentBoxActions align={ALIGNMENT.CENTER}>test</ContentBoxActions>
    );

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__actions--with-centered-elements'
      )
    ).toEqual(true);
  });

  it('has class that aligns elements to right', () => {
    const testBox = render(
      <ContentBoxActions align={ALIGNMENT.RIGHT}>test</ContentBoxActions>
    );

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__actions--with-elements-to-right'
      )
    ).toEqual(true);
  });

  it('has spacedTop class with proper size', () => {
    const testBox = render(
      <ContentBoxActions spacedTop={SIZE.XSMALL}>test</ContentBoxActions>
    );

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__actions--spaced-top-xsmall'
      )
    ).toEqual(true);
  });

  it('has spacedBottom class with proper size', () => {
    const testBox = render(
      <ContentBoxActions spacedBottom={SIZE.XSMALL}>test</ContentBoxActions>
    );

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box__actions--spaced-bottom-xsmall'
      )
    ).toEqual(true);
  });
});
