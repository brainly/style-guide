import React from 'react';
import Dropdown from './Dropdown';
import DropdownContainer from './DropdownContainer';
import DropdownItem from './DropdownItem';
import {shallow, mount} from 'enzyme';


const item1st = {id: 'csdsd', text: '1st item'};
const item2nd = {id: 'sdfsdfg', text: '2nd item'};
const item3rd = {id: 'fdpks', text: '3rd item'};
const defaultItems = [item1st, item2nd, item3rd];
const defaultLabel = 'default Label';
const defaultProps = {items: defaultItems, label: defaultLabel};

describe('dropdown', () => {
  test('render', () => {
    const dropDown = shallow(<Dropdown {...defaultProps}/>);

    expect(dropDown.hasClass('sg-dropdown')).toEqual(true);

  });

  test('default full width', () => {
    const dropDown = shallow(<Dropdown {...defaultProps}/>);

    expect(dropDown.hasClass('sg-dropdown--full-width')).toEqual(true);
  });
  test('no full width', () => {
    const dropDown = shallow(<Dropdown {...defaultProps} fullWidth={false}/>);

    expect(dropDown.hasClass('sg-dropdown--full-width')).toEqual(false);
  });

});


describe('dropdown container', () => {
  test('it\'s container so should\'t render presentional component', () => {
    const dropDown = shallow(<DropdownContainer {...defaultProps}/>);

    expect(dropDown.hasClass('sg-dropdown')).toEqual(false);
  });

  test('mount should render Dropdown component', () => {
    const dropDown = mount(<DropdownContainer {...defaultProps}/>);

    expect(dropDown.hasClass('sg-dropdown')).toEqual(true);
  });


  test('no opened at start', () => {
    const dropDown = mount(<DropdownContainer {...defaultProps}/>);

    expect(dropDown.hasClass('sg-dropdown--opened')).toEqual(false);
    expect(dropDown.state('isOpened')).toEqual(false);
  });


  test('opened at start when props passed', () => {
    const dropDown = mount(<DropdownContainer {...defaultProps} isOpened={true}/>);

    expect(dropDown.hasClass('sg-dropdown--opened')).toEqual(true);
    expect(dropDown.state('isOpened')).toEqual(true);
  });


  test('toggle open', () => {
    const dropDown = mount(<DropdownContainer {...defaultProps}/>);

    expect(dropDown.hasClass('sg-dropdown--opened')).toEqual(false);
    expect(dropDown.state('isOpened')).toEqual(false);

    dropDown.simulate('click');
    expect(dropDown.hasClass('sg-dropdown--opened')).toEqual(true);
    expect(dropDown.state('isOpened')).toEqual(true);

    dropDown.simulate('click');
    expect(dropDown.hasClass('sg-dropdown--opened')).toEqual(false);
    expect(dropDown.state('isOpened')).toEqual(false);
  });

  test('label defined', () => {
    const dropDown = shallow(<DropdownContainer {...defaultProps}/>);

    expect(dropDown.state('label')).toEqual(defaultLabel);
  });

  test('label from selected option', () => {
    const dropDown = shallow(<DropdownContainer items={defaultItems} currentItem={item2nd}/>);

    expect(dropDown.state('label')).toEqual(item2nd.text);
  });

  test('label and currentItem not defined', () => {
    const dropDown = shallow(<DropdownContainer items={defaultItems}/>);

    expect(dropDown.state('label')).toEqual('');
  });

  test('default select', () => {
    const dropDown = shallow(<DropdownContainer items={defaultItems} currentItem={item2nd}/>);

    expect(dropDown.state('currentItem')).toEqual(item2nd);
  });

  test('label contains class sg-dropdown__item-text', () => {
    const dropDown = mount(<DropdownContainer items={[]} label={defaultLabel}/>);
    const label = dropDown.find('.sg-dropdown__item-text');

    expect(label).toHaveLength(1);
    expect(label.text()).toEqual(defaultLabel);
  });

  test('render all options', () => {
    const label = 1;
    const items = defaultItems;
    const dropDown = mount(<DropdownContainer items={items} currentItem={item2nd}/>);
    const options = dropDown.find('.sg-dropdown__item-text');

    expect(options).toHaveLength(label + items.length);
  });

  test('clicking options + calling on props change', () => {
    const onChange = jest.fn();
    const dropDown = mount(<DropdownContainer items={defaultItems} currentItem={item2nd} onChange={onChange}/>);
    const options = dropDown.find('.sg-dropdown__item-text');

    const option1st = options.at(1);
    const option2nd = options.at(2);

    expect(onChange.mock.calls).toHaveLength(0);
    expect(dropDown.state('currentItem')).toEqual(item2nd);

    option1st.simulate('click');
    expect(onChange.mock.calls).toHaveLength(1);
    expect(dropDown.state('currentItem')).toEqual(item1st);

    option1st.simulate('click');
    expect(onChange.mock.calls).toHaveLength(1); //selecting same, no changes
    expect(dropDown.state('currentItem')).toEqual(item1st);

    option2nd.simulate('click');
    expect(onChange.mock.calls).toHaveLength(2);
    expect(dropDown.state('currentItem')).toEqual(item2nd);
  });

});

describe('Dropdown Item', () => {
  test('render', () => {
    const text = 'xyz';
    const dropDown = shallow(<DropdownItem text={text} onClick={() => undefined}/>);
    const textItem = dropDown.find('.sg-dropdown__item-text');

    expect(dropDown.hasClass('sg-dropdown__item-hole')).toEqual(true);
    expect(textItem).toHaveLength(1);
    expect(textItem.text()).toEqual(text);
  });

  test('click working', () => {
    const onClick = jest.fn();
    const dropDown = shallow(<DropdownItem text="xyz" onClick={onClick}/>);

    expect(onClick.mock.calls).toHaveLength(0);

    dropDown.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });

  test('click working', () => {
    const onClick = jest.fn();
    const dropDown = shallow(<DropdownItem text="xyz" onClick={onClick}/>);

    expect(onClick.mock.calls).toHaveLength(0);

    dropDown.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });
});
