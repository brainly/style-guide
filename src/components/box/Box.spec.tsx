import * as React from 'react';
import Box, {PADDING} from './Box';
import {render} from '@testing-library/react';

test('render children', () => {
  const box = render(<Box>some text</Box>);

  expect(box.getByText('some text')).toBeTruthy();
});
test('colors', () => {
  const box = render(<Box color="green-40">some text</Box>);

  const root = box.container.firstChild as HTMLElement;

  expect(root.classList.contains(`sg-box--green-40`)).toEqual(true);
});

test('shadow', () => {
  const box = render(<Box shadow>some text</Box>);
  const root = box.container.firstChild as HTMLElement;

  expect(root.classList.contains('sg-box--shadow')).toEqual(true);
});

test('border', () => {
  const box = render(<Box border>some text</Box>);
  const root = box.container.firstChild as HTMLElement;

  expect(root.classList.contains('sg-box--border')).toEqual(true);
});

test('border', () => {
  const box = render(<Box border={false}>some text</Box>);
  const root = box.container.firstChild as HTMLElement;

  expect(root.classList.contains('sg-box--border')).toEqual(false);
});

test('borderColor', () => {
  const box = render(
    <Box border borderColor="green-40">
      some text
    </Box>
  );
  const root = box.container.firstChild as HTMLElement;

  expect(root.classList.contains('sg-box--border-color-green-40')).toEqual(
    true
  );
});

test.each(
  Object.values(PADDING).map(padding => [padding, `sg-box--padding-${padding}`])
)('padding %i', (padding, paddingClass) => {
  const box = render(<Box padding={padding}>some text</Box>);
  const root = box.container.firstChild as HTMLElement;

  expect(root.classList.contains(paddingClass)).toEqual(true);
});

it('shadow is responsive prop', () => {
  const box = render(<Box shadow={[true, false, null, true]}>box</Box>);
  const root = box.container.firstChild as HTMLElement;

  ['sg-box--shadow', 'md:sg-box--no-shadow', 'xl:sg-box--shadow'].forEach(
    className => {
      expect(root.classList.contains(className)).toEqual(true);
    }
  );
});

// it('noBorderRadius is responsive prop', () => {
//   const component = render(
//     <Box noBorderRadius={[false, true, null, false]}>box</Box>
//   );

//   expect(
//     component.hasClass(
//       'sg-box--border-radius md:sg-box--no-border-radius xl:sg-box--border-radius'
//     )
//   ).toEqual(true);
// });

// it('border is responsive prop', () => {
//   const component = shallow(<Box border={[false, true, null, false]}>box</Box>);

//   expect(
//     component.hasClass(
//       'sg-box--no-border md:sg-box--border xl:sg-box--no-border'
//     )
//   ).toEqual(true);
// });
// it('padding is responsive prop', () => {
//   const component = shallow(<Box padding={['xs', null, 'm', 'xl']}>box</Box>);

//   expect(
//     component.hasClass(
//       'sg-box--padding-xs lg:sg-box--padding-m xl:sg-box--padding-xl'
//     )
//   ).toEqual(true);
// });
// it('when padding is defined and border is defined, then it should decrease padding to keep same size', () => {
//   const component = shallow(
//     <Box padding={['xs', null, 'm', 'xl']} border={[null, null, true]}>
//       box
//     </Box>
//   );

//   expect(
//     component.hasClass(
//       'lg:sg-box--padding-m-border xl:sg-box--padding-xl-border'
//     )
//   ).toEqual(true);
// });
