const rules = [
  {
    pattern: '<b>Should</b> have 3:1 contrast ratio.',
    comment: `white - yellow: 3.05:1; white - gray: 4.37:1; yellow - gray: 1.44:1 <br/>
      To low contrast can <a href="https://whocanuse.com/?b=687b8c&c=c98600&f=20&s=b">
      affect different people with visual impairments</a>.`,
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have element with <code>radiogroup</code> role wrapping radio inputs.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern:
      '<b>Should</b> have accessible label describing current rate value.',
    comment: '<code>aria-label</code> defaults to <code>"current rate"</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have accessible label describing rate action with min and max rate value.',
    comment: 'Defaults to <code>"min: 1, max: 5"</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
];

export default rules;
