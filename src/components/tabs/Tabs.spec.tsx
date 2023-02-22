import * as React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Tabs, {Tab} from './Tabs';

describe('<Tabs />', () => {
  it('shows by default all tabs and only first panel', () => {
    render(
      <Tabs>
        <Tab.Header>
          <Tab.List>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
          </Tab.List>
        </Tab.Header>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tabs>
    );
    expect(screen.getByText('First tab')).toBeInTheDocument();
    expect(screen.getByText('Second tab')).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toHaveClass('panel--hidden');
  });

  it('shows panel corresponding to startIndex', () => {
    render(
      <Tabs startIndex={1}>
        <Tab.Header>
          <Tab.List>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
          </Tab.List>
        </Tab.Header>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tabs>
    );
    expect(screen.getByText('Content 1')).toHaveClass('panel--hidden');
    expect(screen.getByText('Content 2')).not.toHaveClass('panel--hidden');
  });

  it('correctly handles tab change', () => {
    const mockOnChange = jest.fn();

    render(
      <Tabs onTabChange={mockOnChange}>
        <Tab.Header>
          <Tab.List>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
          </Tab.List>
        </Tab.Header>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tabs>
    );
    expect(screen.getByText('Content 1')).not.toHaveClass('panel--hidden');
    expect(screen.getByText('Content 2')).toHaveClass('panel--hidden');
    const secondTab = screen.getByText('Second tab');

    fireEvent.click(secondTab);
    expect(screen.getByText('Content 1')).toHaveClass('panel--hidden');
    expect(screen.getByText('Content 2')).not.toHaveClass('panel--hidden');
    expect(mockOnChange).toBeCalledWith(
      screen.getByText('Second tab').parentElement
    );
  });

  it('makes component controlled if correct props is passed', () => {
    const mockActiveIndex = 2;
    const mockOnChange = jest.fn();
    const {rerender} = render(
      <Tabs onTabChange={mockOnChange} activeIndex={mockActiveIndex}>
        <Tab.Header>
          <Tab.List>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
            <Tab>Third tab</Tab>
          </Tab.List>
        </Tab.Header>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toHaveClass('panel--hidden');
    expect(screen.getByText('Content 2')).toHaveClass('panel--hidden');
    expect(screen.getByText('Content 3')).not.toHaveClass('panel--hidden');

    const secondTab = screen.getByText('Second tab');

    fireEvent.click(secondTab);

    expect(mockOnChange).not.toHaveBeenCalled();
    expect(screen.getByText('Content 1')).toHaveClass('panel--hidden');
    expect(screen.getByText('Content 2')).toHaveClass('panel--hidden');
    expect(screen.getByText('Content 3')).not.toHaveClass('panel--hidden');

    rerender(
      <Tabs onTabChange={mockOnChange} activeIndex={mockActiveIndex - 1}>
        <Tab.Header>
          <Tab.List>
            <Tab>First tab</Tab>
            <Tab>Second tab</Tab>
            <Tab>Third tab</Tab>
          </Tab.List>
        </Tab.Header>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tabs>
    );

    expect(screen.getByText('Content 1')).toHaveClass('panel--hidden');
    expect(screen.getByText('Content 2')).not.toHaveClass('panel--hidden');
    expect(screen.getByText('Content 3')).toHaveClass('panel--hidden');
  });
});
