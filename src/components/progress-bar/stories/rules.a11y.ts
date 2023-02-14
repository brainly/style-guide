const rules = [
  {
    pattern: '<b>Should</b> have <code>progressbar</code> role',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have an accessible label',
    comment: `Can be named by a label specified by <code>aria-label</code> prop or a value 
      (<code>IDREF</code>) set for the <code>aria-labelledby</code> prop that refers to an element.`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> announce current value',
    comment: `<code>aria-valuenow</code>, <code>aria-valuetext</code>, 
      <code>aria-valuemin</code>, <code>aria-valuemax</code>
      are used to inform the user about the current progress`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: 'Track <b>should</b> have 3:1 contrast ratio against background',
    status: 'DONE',
    tests: 'N/A',
  },
];

export default rules;
