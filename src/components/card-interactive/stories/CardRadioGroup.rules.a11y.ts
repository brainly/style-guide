export const rules = [
  {
    pattern: '<b>Should</b> have a role <code>radiogroup</code>.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have only one checked radio at a time.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have descriptive information about invalid state.',
    comment: 'State can be described using <code>errorMessage</code> prop.',
    status: 'DONE',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Can</b> have an accessible name.',
    comment: `Can be named by: <ul>
      <li>a label specified by <code>aria-label</code> prop</li>
      <li>a value (<code>IDREF</code>) set for the <code>aria-labelledby</code> 
      prop that refers to an element.</li></ul>`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Can</b> provide information about active descendant.',
    comment: `The <code>aria-activedescendant</code> attribute identifies the checked <code>Radio</code> 
    within <code>Radiogroup</code> by referencing the id value of the radio button that is active.`,
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern: '<b>Can</b> have an accessible description.',
    comment:
      'Can be described by setting a value for <code>aria-describedby</code> prop.',
    status: 'DONE',
    tests: 'TO DO',
  },
];
export default rules;
