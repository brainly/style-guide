import React from 'react';
import DocsActiveBlock from 'components/DocsActiveBlock';
import Accordion, {spaceClasses} from '../Accordion';
import AccordionItem from '../AccordionItem';
import {Flex, Icon, Link} from '../../../index';

const copy = {
  title: 'Is this title for accordion?',
  description:
    // eslint-disable-next-line max-len
    "Now your family member just needs to open the link and hit 'accept'. If they aren't already on Brainly, we'll hook them up with that too. Create your unique family link with a click and share it with your family via email, Messenger, WhatsApp, whatever you like.",
  cta: 'Learn more',
  url: '#',
};

export const CallToAction = ({url, cta}: {url: string, cta: string}) => {
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

const Accordions = () => {
  const settings = [
    {
      name: 'allowMultiple',
      values: Boolean,
    },
    {
      name: 'spacing',
      values: Object.keys(spaceClasses).reduce(
        (acc, val) => ({
          ...acc,
          [val]: val,
        }),
        {}
      ),
    },
  ];

  return (
    <div>
      <DocsActiveBlock settings={settings}>
        <Accordion>
          <AccordionItem title={copy.title}>
            {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
          </AccordionItem>
          <AccordionItem title={copy.title}>
            {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
          </AccordionItem>
        </Accordion>
      </DocsActiveBlock>
    </div>
  );
};

export default Accordions;
