import * as React from 'react';
import * as AccordionStories from './Accordion.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';
import AccordionItem from './AccordionItem';
import Accordion from './Accordion';
import Bubble from '../bubble/Bubble';

const copy = {
  title: 'Is this title for accordion?',
  // eslint-disable-next-line max-len
  description:
    "Now your family member just needs to open the link and hit 'accept'. If they aren't already on Brainly, we'll hook them up with that too. Create your unique family link with a click and share it with your family via email, Messenger, WhatsApp, whatever you like.",
  bubbleContent:
    "Now your family member just needs to open the link and hit 'accept'. If they aren't already on Brainly",
};

// @ts-ignore TS7006
const WithTooltip = args => {
  const handleChange = () => null;

  const {expanded: propsExpanded, ...props} = args;

  return (
    <Accordion onChange={handleChange} expanded={args.expanded} {...props}>
      <AccordionItem title={copy.title} key="1" id="accordion_item_1">
        {copy.description}
        <Bubble
          direction="top"
          style={{
            position: 'absolute',
            marginTop: '10px',
          }}
        >
          {copy.bubbleContent}
        </Bubble>
      </AccordionItem>
    </Accordion>
  );
};

WithTooltip.args = {
  expanded: 'accordion_item_1',
};
export const Default = generateChromaticStory(
  {...AccordionStories, WithTooltip},
  {
    storiesToHover: ['expanded'],
  }
);
const {includeStories, ...meta} = AccordionStories.default;

export default meta;
