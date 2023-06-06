const rules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Name should be meaningful (ex. "Read more about vitamin C" instead of "Read more") and explain the action 
      (ex. "Search" instead of "Magnifying glass") . <code>aria-label</code> can be used to provide a name.`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have a role <code>button<code>.',
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
    comment: 'ButtonLite uses bold font weight.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have a proper type.',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 4.5:1 contrast ratio to the background.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have <code>cursor: default<code>.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> fire <code>onClick</code> on <code>Space<code>/<code>Enter</code> press and mouse click.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have a visible <code>disabled</code> state.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Can</b> have an accessible label that indicates loading state.',
    comment:
      'Use <code>loadingAriaLabel</code> to set custom information, defaults to "loading".',
    status: 'DONE',
    tests: 'DONE',
  },
];

export const hrefRules = [
  {
    pattern: '<b>Should</b> have a role <code>link</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have <code>cursor: pointer</code>.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> cause the user agent to navigate to a new resource.',
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
];

export default rules;
