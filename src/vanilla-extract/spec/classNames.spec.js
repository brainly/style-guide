import {classNames} from '../classNames';
import * as s from './styles.css';

describe('classNames', () => {
  it('returns classes', () => {
    expect(classNames({foo: s.foo}, {})).toEqual('styles__5u8yz50');
  });

  it('returns classes when props are not provided', () => {
    expect(classNames({foo: s.foo})).toEqual('styles__5u8yz50');
  });

  it('returns variant class based on prop value', () => {
    expect(classNames({sizes: s.sizes}, {sizes: 'm'})).toEqual(
      'styles_m__5u8yz52'
    );
  });

  it('returns all variants classes when prop does not exist', () => {
    expect(classNames({sizes: s.sizes})).toEqual('styles_m__5u8yz52');
  });

  it('returns class when prop is value of true', () => {
    expect(classNames({foo: s.foo}, {foo: true})).toEqual('styles__5u8yz50');
  });

  it('returns empty string when prop is value of false', () => {
    expect(classNames({foo: s.foo}, {foo: false})).toEqual('');
  });

  it('returns classes when prop is responsive', () => {
    expect(
      classNames({layouts: s.layouts}, {layouts: ['block', 'inline', 'block']})
    ).toEqual(
      'styles_block__5u8yz53 styles_md:inline__5u8yz58 styles_lg:block__5u8yz56'
    );
  });
});
