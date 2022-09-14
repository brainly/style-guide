import {sgStyle, sgStyleVariants} from '../style';
import {responsiveVariants} from '../utils';

export const foo = sgStyle({
  display: 'block',
});

export const bar = sgStyle({
  display: 'block',
});

export const sizes = sgStyleVariants({
  m: {
    display: 'block',
  },
});

export const layouts = responsiveVariants(
  {
    block: {
      display: 'block',
    },
    inline: {
      display: 'inline',
    },
  },
  {responsive: true}
);
