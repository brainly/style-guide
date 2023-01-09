const rules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Name should be meaningful (ex. "Read more about vitamin C" instead of "Read more").
      <code>aria-label</code> can be used to provide a name.`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have a role <code>link</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> cause the user agent to navigate to a new resource.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> be focusable and tabable.',
    comment: "<code>href</code> can't be empty.",
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have a non-color indicator.',
    comment: `Ex. underline, bold (italic is not accessible). Default <code>Link</code> weight is <code>bold</code>. 
      <code>underlined</code>, <code>emphasised</code> or <code>weight</code> props can also be provided.`,
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 4.5:1 contrast ratio to the background.',
    comment: `Default <code>Link</code> color is <code>text-blue-60</code> (contrast against white: 9.11:1). 
    Another <code>text-color</code> may also be specified to meet this requirement.`,
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 3:1 contrast ratio to the surrounding text.',
    comment: `Default <code>Link</code> color is <code>text-blue-60</code> (contrast against black: 2.3:1, 
    too low contrast is compensated by bold weight). Another <code>text-color</code> may also be 
    specified to meet this requirement.`,
    status: 'TO DO',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have <code>cursor: pointer</code>.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> be activated by pressing <code>Enter</code> and mouse click.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Can</b> have an accessible label (and/or icon) that indicates opening in new tab.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Can</b> have an accessible label with file size&format (and/or icon) that indicates downloading a file.',
    status: 'TO DO',
    tests: 'TO DO',
  },
];
export const asButtonRules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Name should be meaningful (ex. "Read more about vitamin C" instead of "Read more").
      <code>aria-label</code> can be used to provide a name.`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have a role <code>button</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> be focusable and tabable.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have a non-color indicator.',
    comment: `Ex. underline, bold (italic is not accessible). Default <code>Link</code> weight is <code>bold</code>. 
      <code>underlined</code>, <code>emphasised</code> or <code>weight</code> props can also be provided.`,
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 4.5:1 contrast ratio to the background.',
    comment: `Default <code>Link</code> color is <code>text-blue-60</code> (contrast to white: 9.11:1). 
      Another <code>text-color</code> may also be specified to meet this requirement.`,
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 3:1 contrast ratio to the surrounding text.',
    comment: `Default <code>Link</code> color is <code>text-blue-60</code> (contrast to black: 2.3:1, 
      too low contrast is compensated by bold weight). Another <code>text-color</code> may also 
      be specified to meet this requirement.`,
    status: 'TO DO',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have <code>cursor: pointer</code>.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> fire <code>onClick</code> on <code>Space</code>/<code>Enter</code> press and mouse click.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have a visible <code>disabled</code> state.',
    status: 'DONE',
    tests: 'N/A',
  },
];
export default rules;
