import React from 'react';
import {mount} from 'enzyme';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

describe('<Accordion>', () => {
  it('renders', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(
      accordion
        .find(AccordionItem)
        .containsMatchingElement('Accordion Item Description')
    ).toBe(true);
  });

  it('has collapsed items by default', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(
      accordion
        .find(AccordionItem)
        .getDOMNode()
        .getAttribute('aria-expanded')
    ).toBe('false');
  });

  it('expands items after click', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    const accordionItem = accordion.find(AccordionItem);

    accordionItem.simulate('click');

    expect(accordionItem.getDOMNode().getAttribute('aria-expanded')).toBe(
      'true'
    );

    expect(accordion.find('.sg-accordion-item__content--hidden')).toHaveLength(
      0
    );
  });

  it('expands one item at a time when "allowMultiple" is set to false', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 2">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 3">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    accordion.find({title: 'Item 1'}).simulate('click');
    accordion.find({title: 'Item 2'}).simulate('click');
    accordion.find({title: 'Item 3'}).simulate('click');

    // hostNodes returns html elements and skip react components
    expect(accordion.find('[aria-expanded=true]').hostNodes()).toHaveLength(1);
  });

  it('allows expanding multiple items when "allowMultiple" is set to true', () => {
    const accordion = mount(
      <Accordion allowMultiple>
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 2">Accordion Item Description</AccordionItem>
        <AccordionItem title="Item 3">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    accordion.find({title: 'Item 1'}).simulate('click');
    accordion.find({title: 'Item 2'}).simulate('click');
    accordion.find({title: 'Item 3'}).simulate('click');

    // hostNodes returns html elements and skip react components
    expect(accordion.find('[aria-expanded=true]').hostNodes()).toHaveLength(3);
  });

  it('displays no gaps between elements when spacing is set to "none"', () => {
    const accordion = mount(
      <Accordion spacing="none">
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    expect(accordion.find('Box').hasClass('sg-accordion-item--no-gap')).toBe(
      true
    );
  });

  it('does not change border on hover when spacing is set to "none"', () => {
    const accordion = mount(
      <Accordion spacing="none">
        <AccordionItem title="Item 1">Accordion Item Description</AccordionItem>
      </Accordion>
    );

    accordion.find({title: 'Item 1'}).simulate('mouseenter');

    expect(accordion.find('Box').prop('borderColor')).toEqual(
      'gray-secondary-lightest'
    );
  });
});
