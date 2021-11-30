//@flow

import * as React from 'react';
import DocsBlock from 'components/DocsBlock';
import Accordion from '../Accordion';
import AccordionItem from '../AccordionItem';
import Flex from '../../flex/Flex';
import Link from '../../text/Link';
import Icon from '../../icons/Icon';

const CallToAction = ({
  url,
  cta,
}: $ReadOnly<{
  url?: string,
  cta?: string,
}>) => {
  return (
    <Flex marginTop="s">
      <Link href={url}>
        <Flex inlineFlex alignItems="center">
          <span>{cta}</span>
          <Icon type="arrow_right" color="icon-blue-50" size={16} />
        </Flex>
      </Link>
    </Flex>
  );
};

const copy = {
  title: 'Is this title for accordion?',
  description:
    // eslint-disable-next-line max-len
    "Now your family member just needs to open the link and hit 'accept'. If they aren't already on Brainly, we'll hook them up with that too. Create your unique family link with a click and share it with your family via email, Messenger, WhatsApp, whatever you like.",
  cta: 'Learn more',
  url: '#',
};

const items = [
  <AccordionItem title={copy.title} id="first" key="1">
    {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
  </AccordionItem>,
  <AccordionItem title={copy.title} id="second" key="2">
    {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
  </AccordionItem>,
  <AccordionItem title={copy.title} key="3">
    {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
  </AccordionItem>,
  <AccordionItem title={copy.title} key="4">
    {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
  </AccordionItem>,
];

const accordion = () => (
  <div>
    <DocsBlock info="Doesn't allow multiple items expanded">
      <Accordion>{items}</Accordion>
    </DocsBlock>
    <DocsBlock info="Allows multiple items expanded">
      <Accordion allowMultiple>{items}</Accordion>
    </DocsBlock>
    <DocsBlock info="Reduce motion enabled">
      <Accordion reduceMotion>{items}</Accordion>
    </DocsBlock>
    <DocsBlock info="No gap between elements with first 2 elements opened by default">
      <Accordion spacing="none">{items}</Accordion>
    </DocsBlock>
  </div>
);

export default accordion;
