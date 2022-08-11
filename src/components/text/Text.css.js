// // @flow

// import {styleVariants, style} from '@vanilla-extract/css';
// import colors from '../colors/colors';
// import {
//   screenSizeMediaQueries,
//   fontFamilies,
//   fontWeights,
// } from '../../vanilla-extract/config';

// const sizes = {
//   xxxlarge: {
//     fontSize: '66px',
//     lineHeight: '88px',
//   },
//   xxlarge: {
//     fontSize: '45px',
//     lineHeight: '60px',
//   },
//   xlarge: {
//     fontSize: '33px',
//     lineHeight: '44px',
//   },
//   large: {
//     fontSize: '24px',
//     lineHeight: '32px',
//   },
//   medium: {
//     fontSize: '18px',
//     lineHeight: '24px',
//   },
//   small: {
//     fontSize: '15px',
//     lineHeight: '20px',
//   },
//   xsmall: {
//     fontSize: '12px',
//     lineHeight: '16px',
//   },
//   xxsmall: {
//     fontSize: '9px',
//     lineHeight: '12px',
//   },
// };

// const {text: textColors} = colors;

// export const textStyle = style({
//   fontWeight: fontWeights.regular,
//   fontFamily: fontFamilies.proxima,
//   fontSize: sizes.medium.fontSize,
//   lineHeight: sizes.medium.lineHeight,
//   background: 'red',
// });

// export const inheritedStyle = style({
//   fontSize: 'inherit',
//   lineHeight: 'inherit',
//   fontFamily: 'inherit',
//   fontWeight: 'inherit',
//   color: 'inherit',
// });

// export const colorVariants = styleVariants(
//   textColors.reduce((acc, next) => {
//     acc[next.name] = {
//       color: `#${next.hex}`,
//     };

//     return acc;
//   }, {})
// );

// export const sizeVariants = styleVariants(
//   Object.keys(sizes).reduce((acc, next) => {
//     acc[next] = {
//       fontSize: sizes[next].fontSize,
//       lineHeight: sizes[next].lineHeight,
//     };

//     Object.keys(screenSizeMediaQueries).forEach(breakpoint => {
//       acc[`${breakpoint}:${next}`] = {
//         '@media': {
//           [screenSizeMediaQueries[breakpoint]]: {
//             fontSize: sizes[next].fontSize,
//             lineHeight: sizes[next].lineHeight,
//           },
//         },
//       };
//     });

//     return acc;
//   }, {})
// );

// export const weightVariants = styleVariants(
//   Object.keys(fontWeights).reduce((acc, next) => {
//     acc[next] = {
//       fontWeight: fontWeights[next],
//     };

//     Object.keys(screenSizeMediaQueries).forEach(breakpoint => {
//       acc[`${breakpoint}:${next}`] = {
//         '@media': {
//           [screenSizeMediaQueries[breakpoint]]: {
//             fontWeight: fontWeights[next],
//           },
//         },
//       };
//     });

//     return acc;
//   }, {})
// );

// export const wrapVariants = styleVariants({
//   wrap: {
//     whiteSpace: 'wrap',
//   },
//   noWrap: {
//     whiteSpace: 'nowrap',
//   },
// });

// export const linkVariants = styleVariants({
//   main: {
//     cursor: 'pointer',
//     textDecoration: 'none',
//     color: `#${colors.text.find(color => color.name === 'text-blue-60').hex}`,

//     ':hover': {
//       textDecoration: 'underline',
//     },
//     ':active': {
//       textDecoration: 'underline',
//     },
//   },
//   underlined: {
//     cursor: 'pointer',
//     textDecoration: 'underline',
//   },
// });
