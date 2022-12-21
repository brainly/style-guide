import * as React from 'react';
import {render, waitForElementToBeRemoved} from '@testing-library/react';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';

describe('Accordion a11y', () => {
  it('renders accordion with expanded and collapsed items', async () => {
    const accordionIds = ['id-1', 'id-2'];

    await testA11y(
      <Accordion defaultExpanded={accordionIds[0]}>
        {accordionIds.map(id => (
          <AccordionItem title={id} id={id} key={id}>
            Accordion Item Description
          </AccordionItem>
        ))}
      </Accordion>
    );
  });

  it('renders with named items', () => {
    const title = 'Item_1';
    const accordion = render(
      <Accordion defaultExpanded={[title]}>
        <AccordionItem title={title} id={title}>
          Accordion Item Description
        </AccordionItem>
      </Accordion>
    );

    const heading = accordion.getByRole('heading', {name: title});

    expect(heading.getAttribute('aria-level')).toBeTruthy();

    expect(accordion.getByRole('region', {name: title})).toBeTruthy();
    expect(accordion.getByRole('button').getAttribute('aria-controls')).toEqual(
      accordion.getByRole('region').getAttribute('id')
    );
  });

  it('expands and collapses item on Enter/Space keydown', async () => {
    const accordionId = 'id-1';
    const accordion = render(
      <Accordion>
        <AccordionItem title={accordionId} id={accordionId}>
          Accordion Item Description
        </AccordionItem>
      </Accordion>
    );
    const item = accordion.getByRole('button');

    expect(item.getAttribute('aria-expanded')).toEqual('false');
    expect(accordion.queryByRole('region')).toBeFalsy();
    accordion.getByRole('button').focus();
    expect(item).toEqual(document.activeElement);
    userEvent.keyboard('{enter}');

    expect(item.getAttribute('aria-expanded')).toEqual('true');
    expect(accordion.getByRole('region')).toBeTruthy();

    userEvent.keyboard('{space}');

    expect(item.getAttribute('aria-expanded')).toEqual('false');
    waitForElementToBeRemoved(accordion.queryByRole('region'));
  });

  it('has an accessible name', () => {
    const label = 'Accordion name';
    const accordion = render(<Accordion aria-label={label} />);

    expect(accordion.getByLabelText(label)).toBeTruthy();
  });
});
