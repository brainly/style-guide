import * as LinkStories from './Link.stories.mdx';
import {
  generateChromaticStory,
  responsivePropsStoryLabel,
} from '../../chromatic/utils';
import React from 'react';
import Link, {LINK_ALIGN, LINK_SIZE, LINK_WEIGHT, LINK_TRANSFORM} from './Link';

// @ts-ignore TS7006
export const ResponsiveProps = args => {
  return (
    <div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('size', [
          LINK_SIZE.SMALL,
          LINK_SIZE.XXLARGE,
          null,
          LINK_SIZE.XXXLARGE,
        ])}
      </h3>
      <Link
        href="#"
        size={[LINK_SIZE.SMALL, LINK_SIZE.XXLARGE, null, LINK_SIZE.XXXLARGE]}
      >
        Test
      </Link>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('weight', [
          LINK_WEIGHT.BOLD,
          LINK_WEIGHT.REGULAR,
          null,
          LINK_WEIGHT.BOLD,
        ])}
      </h3>
      <Link
        weight={[LINK_WEIGHT.BOLD, LINK_WEIGHT.REGULAR, null, LINK_WEIGHT.BOLD]}
        href="#"
      >
        Test
      </Link>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('transform', [
          LINK_TRANSFORM.UPPERCASE,
          LINK_TRANSFORM.LOWERCASE,
          null,
          LINK_TRANSFORM.CAPITALIZE,
        ])}
      </h3>
      <Link
        href="#"
        transform={[
          LINK_TRANSFORM.UPPERCASE,
          LINK_TRANSFORM.LOWERCASE,
          null,
          LINK_TRANSFORM.CAPITALIZE,
        ]}
      >
        Test
      </Link>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('align', [
          LINK_ALIGN.JUSTIFY,
          null,
          LINK_ALIGN.CENTER,
          LINK_ALIGN.RIGHT,
        ])}
      </h3>
      <div style={{width: 400}}>
        <Link
          href="#"
          align={[
            LINK_ALIGN.JUSTIFY,
            null,
            LINK_ALIGN.CENTER,
            LINK_ALIGN.RIGHT,
          ]}
          {...args}
        >
          Aliquip sit pariatur laboris in aliqua. Enim esse eu est nisi eiusmod
          minim deserunt ut cupidatat dolore velit deserunt nisi. Enim in anim
          aute non.
        </Link>
      </div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('noWrap', [true, false, null, true])}
      </h3>
      <div style={{border: '1px solid gray', width: '400px'}}>
        <Link href="#" noWrap={[true, false, null, true]}>
          Aliquip sit pariatur laboris in aliqua. Enim esse eu est nisi eiusmod.
        </Link>
      </div>
      <h3 className="component__story-name">
        {responsivePropsStoryLabel('breakWords', [true, false, null, true])}
      </h3>
      <div style={{border: '1px solid gray', width: '400px'}}>
        <Link {...args} breakWords={[true, false, null, true]}>
          very-very-very-very-very-very-very-very-very-very-very-very-very-very-long-word
        </Link>
      </div>
    </div>
  );
};

ResponsiveProps.parameters = {
  chromatic: {
    viewports: [680, 900, 1100, 1500],
  },
};

const {includeStories, ...meta} = LinkStories.default;

export const Default = generateChromaticStory(LinkStories, {
  storiesToHover: ['colors'],
});

export default meta;
