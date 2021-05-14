//@flow

import * as React from 'react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import {Flex, Icon, Link} from '../../index';
import Button from 'buttons/Button';

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
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title}>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
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
  <Accordion spacing="none" allowMultiple>
    <AccordionItem title={copy.title} defaultOpened>
      {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
    </AccordionItem>
    <AccordionItem title={copy.title} defaultOpened>
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

export const ControlledSingle = () => {
  const accordionsIds = ['id-1', 'id-2', 'id-3'];
  const [index, setIndex] = React.useState(accordionsIds[0]);

  const setNewIndex = id => setIndex(id);

  return (
    <>
      {accordionsIds.map(id => (
        <Button type="solid-light" key={id} onClick={() => setNewIndex(id)}>
          open {id} button
        </Button>
      ))}

      <Accordion onChange={setNewIndex} index={index}>
        {accordionsIds.map(id => (
          <AccordionItem title={copy.title} key={id} customId={id}>
            {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export const ControlledMultiple = () => {
  const accordionsIds = ['id-1', 'id-2', 'id-3'];
  const [index, setIndex] = React.useState(['id-1', 'id-2']);

  const setNewIndex = id =>
    setIndex(prev =>
      prev.includes(id) ? prev.filter(prevId => prevId !== id) : [...prev, id]
    );

  return (
    <>
      {accordionsIds.map(id => (
        <Button type="solid-light" key={id} onClick={() => setNewIndex(id)}>
          toggle {id} button
        </Button>
      ))}
      {/* allowMultiple needs to be passed if we want to controll multiple items */}
      <Accordion onChange={setNewIndex} index={index} allowMultiple>
        {accordionsIds.map(id => (
          <AccordionItem title={copy.title} key={id} customId={id}>
            {copy.description} <CallToAction url={copy.url} cta={copy.cta} />
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
