/*jslint sloppy:true, nomen:true */
/*global jasmine, describe, xdescribe, it, xit,
 expect, beforeEach, afterEach,
 */
import fn from './combineMods';

describe('combineMods', () => {
  it('should combine given strings', () => {
    expect(fn('a', 'b')).toEqual('a b');
  });

  it('should ignore empty strings', () => {
    expect(fn('a', 'b', '')).toEqual('a b');
  });

  it('should ignore null', () => {
    expect(fn('a', 'b', null)).toEqual('a b');
  });

  it('should ignore undefined', () => {
    expect(fn('a', 'b', undefined)).toEqual('a b');
  });


});
