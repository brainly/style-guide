const rules = [
  {
    pattern: '<b>Can</b> have an accessible name.',
    comment: `Can be named by a label specified by <code>aria-label</code> prop or a value 
      (<code>IDREF</code>) set for the <code>aria-labelledby</code> prop that refers to an element.`,
    status: 'DONE',
    tests: 'DONE',
  },
];

export const accordionItemRules = [
  {
    pattern:
      '<b>Should</b> expend/collapse content by pressing <code>Space</code>/<code>Enter</code> and mouse click.',
    comment: `Keyboard expansion can be disabled by setting <code>disableKeyboardExpansion</code> prop to <code>true</code>. 
      Mouse click interaction will always work regardless of this setting.`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have element with role <code>button</code> in header.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have element with role <code>heading</code> and <code>aria-level</code> in title.',
    comment: `<code>aria-level</code> can be set by <code>ariaHeadingLevel</code> prop.
      <code>ariaHeadingLevel</code> defaults to <code>2</code>.`,
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have element with role <code>region</code> and and an accessible name.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have <code>aria-expanded="true"</code> set on button element when expanded.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> have <code>aria-controls</code> set on button.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern:
      '<b>Should</b> have <code>hidden</code> set on region element when collapsed.',
    status: 'DONE',
    tests: 'DONE',
  },
  {
    pattern: '<b>Should</b> respect <code>prefers-reduced-motion</code>.',
    comment: '<code>prefers-reduced-motion</code> system setting is respected.',
    status: 'DONE',
    tests: 'N/A',
  },
  {
    pattern: `<b>Should</b> have <code>aria-disabled</code> set to 
      <code>true</code> on button element if collapsing the item is not permitted.`,
    status: 'TO DO',
    tests: 'TO DO',
  },
  {
    pattern: `<b>Should</b> be tabable.`,
    comment: `<code>AccordionItem</code> by <code>AccordionItem</code> 
    or, when it is expanded, element by element in the content.`,
    status: 'DONE',
    tests: 'N/A',
  },
];
export default rules;
