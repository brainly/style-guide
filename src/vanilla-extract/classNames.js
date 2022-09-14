import {generateResponsiveClassNames} from '../components/utils/responsive-props';

export const classNames = (styles, props) => {
  return Object.keys(styles)
    .map(styleKey => {
      if (props && props[styleKey] !== undefined) {
        if (typeof props[styleKey] === 'boolean') {
          if (props[styleKey]) {
            if (styles[styleKey].responsive) {
              return generateResponsiveClassNames(
                prop => prop,
                props[styleKey]
              ).map(className => styles.sizeVariants[className]);
            } else {
              return styles[styleKey].styles;
            }
          } else {
            return '';
          }
        } else if (styles[styleKey].responsive) {
          return generateResponsiveClassNames(prop => prop, props[styleKey])
            .map(className => styles[styleKey].variants[className])
            .join(' ');
        } else {
          return styles[styleKey].variants[props[styleKey]];
        }
      } else if (styles[styleKey].styles) {
        return styles[styleKey].styles;
      } else if (styles[styleKey].variants) {
        return Object.keys(styles[styleKey].variants)
          .reduce(
            (acc, next) => `${acc} ${styles[styleKey].variants[next]}`,
            ''
          )
          .substring(1);
      } else {
        return '';
      }
    })
    .reduce((acc, next) => `${acc} ${next}`);
};
