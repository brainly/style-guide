const rules = [
  {
    pattern: '<b>Should</b> have 4.5:1 contrast ratio.',
    comment: `<code>red-60</code> against white 5.48:1, <code>blue-60</code> 
      against white 9.11:1, <code>gray-20</code> against black 18.57:1.`,
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Can be named by a label specified by <code>aria-label</code> prop or a value 
      (<code>IDREF</code>) set for the <code>aria-labelledby</code> prop that refers to an element.`,
    status: 'DONE',
    tests: 'DONE',
  },
];
export default rules;