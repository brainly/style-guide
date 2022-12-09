const rules = [
  {
    pattern: '<b>Should</b> have a proper contrast ratio.',
    comment:
      'For <code>medium</code> size and larger: 3:1 against the background, in other cases: 4.5:1 against the background. \n Text color should be chosen to comply with this rule: \n - <code>medium</code> size text against white background: <code>indigo-40</code>, and color variants 50 and darker, \n - <code>medium</code> size text against black background: color variant 50 and lighter (except <code>indigo-50</code>).',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> create a logical content structure.',
    comment:
      'Logical content structure is created by proper html semantics. Use <code>type</code> to set tag.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> be enlargable.',
    comment:
      'The page should be functional when only the text is magnified to 200% of its initial size. User can zoom in and out to change the size of the text. \n User default font size is not respected by the component.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should not</b> exceed 80 characters in length.',
    status: 'N/A',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should not</b> be too small.',
    comment:
      'Default document font size (1em) is 16px, <code>size</code> prop defaults to <code>medium</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> use semantic markup (ex. <code><strong></code>, <code><em></code>) to properly announce style changes to all users.',
    status: 'DONE',
    tests: 'N/A',
  },
];

export default rules;
