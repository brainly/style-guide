//@flow

import * as React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

const copy = {
  title: 'Is this title for accordion?',
  description:
    // eslint-disable-next-line max-len
    "Now your family member just needs to open the link and hit 'accept'. If they aren't already on Brainly, we'll hook them up with that too. Create your unique family link with a click and share it with your family via email, Messenger, WhatsApp, whatever you like.",
};

const items = [
  <AccordionItem title={copy.title} id="accordion-item-1" key="1">
    {copy.description}
  </AccordionItem>,
  <AccordionItem title={copy.title} key="2">
    {copy.description}
  </AccordionItem>,
  <AccordionItem title={copy.title} key="3">
    {copy.description}
  </AccordionItem>,
];

export default {
  title: 'Layout/Accordion',
  component: Accordion,
  subcomponents: {AccordionItem},
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    onChange: {
      table: {
        category: 'Events',
      },
    },
    defaultExpanded: {
      control: {
        type: 'array',
      },
    },
    expanded: {
      control: {
        type: 'array',
      },
    },
  },
  args: {
    allowMultiple: true,
    children: items,
  },
};

export const Default = (args: any) => <Accordion {...args} />;

const CONTROLLED_ACCORDION_IDS = [
  'accrodion item 1',
  'accordion item 2',
  'accordion item 3',
];

export const Expanded = (args: any) => {
  const [prevExpanded, setPrevExpanded] = React.useState();
  const [expanded, setExpanded] = React.useState('');
  const handleChange = id => setExpanded(id);

  const {expanded: propsExpanded, ...props} = args;

  if (propsExpanded !== prevExpanded) {
    setPrevExpanded(propsExpanded);
    setExpanded(propsExpanded);
  }

  return (
    <Accordion onChange={handleChange} expanded={expanded} {...props}>
      {CONTROLLED_ACCORDION_IDS.map(id => (
        <AccordionItem title={copy.title} key={id} id={id}>
          {copy.description}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

Expanded.args = {
  expanded: CONTROLLED_ACCORDION_IDS[0],
  reduceMotion: true,
};

export const NoGaps = (args: any) => <Accordion {...args} spacing="none" />;

export const ReducedMotion = (args: any) => <Accordion {...args} />;

ReducedMotion.args = {
  reduceMotion: true,
};
