//@flow strict

import React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import {Flex, Icon, Link} from '../../index';

export default {
  title: 'Components/Accordion',
  parameters: {
    component: Accordion,
  },
};

const copy = {
  title: 'Is this title for accordion?',
  description:
    "Now your family member just needs to open the link and hit 'accept'. If they aren't already on Brainly, we'll hook them up with that too. Create your unique family link with a click and share it with your family via email, Messenger, WhatsApp, whatever you like.",
  cta: 'Learn more',
  url: '#',
};

const CallToAction = ({url, cta}) => {
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

export const Default = args => (
  <Accordion {...args}>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
  </Accordion>
);
