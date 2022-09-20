// @flow strict

import * as styles from './responsive-recipes-test-styles';
import {runResponsiveRecipe} from './responsive-recipes';

describe('responsiveRecipe', () => {
  it('returns function, that works as vanilla recipe', () => {
    expect(styles.button({color: 'pink'})).toContain(
      'responsive-recipes-test-styles_color_pink'
    );
  });

  it('when variant is marked as responsive and array is passed, it returns responsive classes', () => {
    const size = ['s', undefined, 'l'];

    expect(runResponsiveRecipe(styles.button, {size})).toContain(
      'responsive-recipes-test-styles_size_s'
    );
    // expect(styles.button({size})).toContain(
    //   'responsive-recipes-test-styles_lg:size_l'
    // );

    // expect(styles.button({size})).not.toContain(
    //   'responsive-recipes-test-styles_md:'
    // );
  });

  //   it('when variant is marked as responsive and object is passed, it returns responsive classes', () => {
  //     const size = {
  //       sm: 's',
  //       md: 'l',
  //       lg: null,
  //     };

  //     expect(styles.button({size})).toContain(
  //       'responsive-recipes-test-styles_size_s'
  //     );
  //     expect(styles.button({size})).toContain(
  //       'responsive-recipes-test-styles_md:size_l'
  //     );
  //     expect(styles.button({size})).not.toContain(
  //       'responsive-recipes-test-styles_lg:'
  //     );
  //   });
});
