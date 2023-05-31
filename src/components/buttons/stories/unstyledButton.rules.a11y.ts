const rules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Name should be meaningful (ex. "Read more about vitamin C" instead of "Read more") and explain the action 
      (ex. "Search" instead of "Magnifying glass"). <code>aria-label</code> can be used to provide a name.`,
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> have a role <code>button<code>.',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> be focusable and tabable.',
    status: 'DONE',
    tests: 'TO DO',
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
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> have a proper type.',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Should</b> have a non-color indicator.',
    comment: 'To be implemented by the developer',
    status: 'N/A',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 4.5:1 contrast ratio to the background.',
    comment: 'To be implemented by the developer',
    status: 'N/A',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 3:1 contrast ratio to the surrounding background.',
    comment: 'To be implemented by the developer',
    status: 'N/A',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have a visible <code>disabled</code> state.',
    comment: 'To be implemented by the developer',
    status: 'N/A',
    tests: 'N/A',
  },
];

export default rules;
