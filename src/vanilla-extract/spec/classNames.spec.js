import {classNames} from '../classNames';
import * as s from './styles.css';

describe('classNames', () => {
  it('returns classes', () => {
    expect(classNames({foo: s.foo}, {})).toEqual('styles__5u8yz50');
  });

  it('when props are not provided then returns classes', () => {
    expect(classNames({foo: s.foo})).toEqual('styles__5u8yz50');
  });

  it('returns variant class based on prop value', () => {
    expect(classNames({sizes: s.sizes}, {sizes: 'm'})).toEqual(
      'styles_m__5u8yz52'
    );
  });

  it('when prop does not exist then returns all variants classes', () => {
    expect(classNames({sizes: s.sizes})).toEqual('styles_m__5u8yz52');
  });

  it('when prop is value of true, returns class', () => {
    expect(classNames({foo: s.foo}, {foo: true})).toEqual('styles__5u8yz50');
  });

  it('when prop is value of false then returns empty string', () => {
    expect(classNames({foo: s.foo}, {foo: false})).toEqual('');
  });

  it('when prop is responsive then returns responsive classes', () => {
    expect(
      classNames({layouts: s.layouts}, {layouts: ['block', 'inline', 'block']})
    ).toEqual(
      'styles_block__5u8yz53 styles_md:inline__5u8yz58 styles_lg:block__5u8yz56'
    );
  });

  it.skip('when prop transform functions are provided, uses their results to retrieve class', () => {
    expect(
      classNames(
        {layouts: s.layouts},
        {layouts: [true, false, true]},
        {layouts: value => (value === true ? 'block' : 'inline')}
      )
    ).toEqual(
      'styles_block__5u8yz53 styles_md:inline__5u8yz58 styles_lg:block__5u8yz56'
    );
  });
});
