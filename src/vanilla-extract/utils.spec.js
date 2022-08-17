import {mix} from './utils';

it('mixes colors', () => {
  expect(mix('rgba(242, 236, 228, 0.5)', '#6b717f')).toEqual(
    'rgba(141,144,152,0.75)'
  );
});
