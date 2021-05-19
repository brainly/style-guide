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
  },
};
k;
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

export const NoGaps = () => (
  <Accordion spacing="none" allowMultiple defaultIndex={['first', 'second']}>
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

const CONTROLLED_ACCORDION_IDS = [
  'accrodion item 1',
  'accordion item 2',
  'accordion item 3',
];

export const Controlled = (args: any) => {
  const [prevIndex, setPrevIndex] = React.useState();
  const [index, setIndex] = React.useState(null);
  const setNewIndex = id => setIndex(id);

  if (args.index !== prevIndex) {
    setPrevIndex(args.index);
    setIndex(args.index);
  }

  return (
    <Accordion onChange={setNewIndex} index={index}>
      {CONTROLLED_ACCORDION_IDS.map(id => (
        <AccordionItem title={copy.title} key={id} id={id}>
          {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

Controlled.args = {
  index: CONTROLLED_ACCORDION_IDS[0],
};

Controlled.argTypes = {
  index: {control: {type: 'select', options: CONTROLLED_ACCORDION_IDS}},
};
