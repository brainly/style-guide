//@flow

import * as React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import {Flex, Icon, Link} from '../../index';

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
};

const copy = {
  title: 'Is this title for accordion?',
  description:
    // eslint-disable-next-line max-len
    "Now your family member just needs to open the link and hit 'accept'. If they aren't already on Brainly, we'll hook them up with that too. Create your unique family link with a click and share it with your family via email, Messenger, WhatsApp, whatever you like.",
  cta: 'Learn more',
  url: '#',
};

const CallToAction = ({url, cta}: {url: string, cta: string}) => {
  return (
    <Flex marginTop="s">
      <Link href={url}>
        <Flex inlineFlex alignItems="center">
          <span>{cta}</span>
          <Icon type="arrow_right" color="blue" size={16} />
        </Flex>
      </Link>
    </Flex>
  );
};

export const Default = (args: any) => (
  <Accordion {...args}>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
  </Accordion>
);

export const NoGaps = (args: any) => (
  <Accordion {...args}>
    <AccordionItem title={copy.title} id="first">
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title} id="second">
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
  </Accordion>
);

NoGaps.args = {
  spacing: 'none',
  allowMultiple: true,
  defaultExpanded: ['first', 'second'],
};

const CONTROLLED_ACCORDION_IDS = [
  'accrodion item 1',
  'accordion item 2',
  'accordion item 3',
];

export const Controlled = (args: any) => {
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
          {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

Controlled.args = {
  expanded: CONTROLLED_ACCORDION_IDS[0],
};

Controlled.argTypes = {
  expanded: {
    control: {type: 'select', options: CONTROLLED_ACCORDION_IDS},
  },
  allowMultiple: {control: null},
  defaultExpanded: {control: null},
};
