import * as React from 'react';
import Media from './Media';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

const defaultProps = {
  contentArray: [
    <span key={1} className="sg-text sg-text--text-gray-70 sg-text--link">
      The Goat
    </span>,
    <span key={2}>Master</span>,
  ],
  aside: <div>aside</div>,
};

describe('Media', () => {
  it('render', () => {
    const media = render(<Media {...defaultProps} />);

    expect(media.queryByText('Master')).toBeTruthy();
    expect(media.queryByText('The Goat')).toBeTruthy();
  });

  it('testing modifications - all on', () => {
    const media = render(
      <Media
        {...defaultProps}
        color="gray-20"
        clickable
        toRight
        small
        noPadding
        spacedBottom
      />
    );
    // @ts-ignore TS18047
    const rootClasses = media.container.firstElementChild.classList;

    expect(rootClasses.contains('sg-media--clickable')).toEqual(true);
    expect(rootClasses.contains('sg-media--no-padding')).toEqual(true);
    expect(
      // @ts-ignore TS18047
      media.container.firstElementChild.querySelectorAll(
        '.sg-media__content--spaced-bottom'
      )
    ).toHaveLength(defaultProps.contentArray.length);
    expect(
      // @ts-ignore TS18047
      media.container.firstElementChild.querySelectorAll(
        '.sg-media__content--small'
      )
    ).toHaveLength(defaultProps.contentArray.length);
  });

  it('testing modifications - all off', () => {
    const media = render(<Media {...defaultProps} />);
    // @ts-ignore TS18047
    const rootClasses = media.container.firstElementChild.classList;

    expect(rootClasses.contains('sg-media--clickable')).toEqual(false);
    expect(rootClasses.contains('sg-media--no-padding')).toEqual(false);
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Media aside="Aside" contentArray={['item1', 'item2']} />);
    });
  });
});
