import * as React from 'react';
import ContentBox, {CONTENT_BOX_SPACING_SIZE} from './ContentBox';
import {render} from '@testing-library/react';

describe('<ContentBox />', () => {
  it('renders', () => {
    const contentBox = render(<ContentBox>test</ContentBox>);

    expect(
      // @ts-expect-error TS18047
      contentBox.container.firstElementChild.classList.contains(
        'sg-content-box'
      )
    ).toEqual(true);
  });
  it('has full class', () => {
    const contentBox = render(<ContentBox full>test</ContentBox>);

    expect(
      // @ts-expect-error TS18047
      contentBox.container.firstElementChild.classList.contains(
        'sg-content-box--full'
      )
    ).toEqual(true);
  });
  it('has spaced class', () => {
    const contentBox = render(<ContentBox spaced>test</ContentBox>);
    const contentBox2 = render(<ContentBox spacedSmall>test</ContentBox>);

    expect(
      // @ts-expect-error TS18047
      contentBox.container.firstElementChild.classList.contains(
        'sg-content-box--spaced'
      )
    ).toEqual(true);
    expect(
      // @ts-expect-error TS18047
      contentBox2.container.firstElementChild.classList.contains(
        'sg-content-box--spaced-small'
      )
    ).toEqual(true);
  });
  it('has spacedBottom proper class', () => {
    const testBox = render(
      <ContentBox spacedBottom={CONTENT_BOX_SPACING_SIZE.NORMAL}>
        test
      </ContentBox>
    );

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box--spaced-bottom'
      )
    ).toEqual(true);
    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box--spaced-bottom-normal'
      )
    ).toEqual(false);
  });
  it('has spacedBottom class with proper size', () => {
    const testBox = render(
      <ContentBox spacedBottom={CONTENT_BOX_SPACING_SIZE.XSMALL}>
        test
      </ContentBox>
    );

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box--spaced-bottom-xsmall'
      )
    ).toEqual(true);
  });
  it('has spacedTop proper class', () => {
    const testBox = render(
      <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.NORMAL}>test</ContentBox>
    );

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box--spaced-top'
      )
    ).toEqual(true);
    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box--spaced-top-normal'
      )
    ).toEqual(false);
  });
  it('has spacedTop class with proper size', () => {
    const testBox = render(
      <ContentBox spacedTop={CONTENT_BOX_SPACING_SIZE.XSMALL}>test</ContentBox>
    );

    expect(
      // @ts-expect-error TS18047
      testBox.container.firstElementChild.classList.contains(
        'sg-content-box--spaced-top-xsmall'
      )
    ).toEqual(true);
  });
});
