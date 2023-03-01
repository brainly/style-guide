const rules = [
  {
    pattern: '<b>Can</b> have an accessible name.',
    comment:
      'Can be named by setting a value for <code>title</code> prop (defaults to icon type).',
    status: '',
    tests: '',
  },
];

export const tabRules = [
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Name should be meaningful. <code>aria-label</code> can be used to provide a name.`,
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> have a role <code>tab<code>.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> have an associated tab panel.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> be tabbable and focusable when associated tab panel is active.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> have a color indicator with 4.5:1 contrast ratio to the background.',
    comment: '<code>gray-50</code> against white: 4.37:1.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> have a color active indicator with 3:1 contrast ratio to the surrounding background.',
    comment: '<code>Tab.ActiveIndicator</code> should be used.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> have <code>cursor: default<code>.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> be activated on <code>Space<code>/<code>Enter</code> press and mouse click.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> be contained in, or owned by, an element with the role <code>tablist</code>.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> have the <code>aria-selected</code> attribute set to true when associated tab panel is active.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Can</b> have the <code>aria-controls</code> attribute to reference the associated tab panel.',
    status: '',
    tests: '',
  },
];

export const tabActiveIndicatorRules = [
  {
    pattern:
      '<b>Should</b> have a color active indicator with 3:1 contrast ratio to the surrounding background.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> be hidden from accessibility tree.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> respect <code>prefers-reduced-motion</code>.',
    comment: `<code>prefers-reduced-motion</code> system setting is respected.`,
    status: '',
    tests: '',
  },
];

export const tabListRules = [
  {
    pattern: '<b>Should</b> have a role <code>tablist<code>.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> contain element with <code>tab</code> role.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> have <code>aria-orientation</code> set to <code>horizontal</code>.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> have an accessible name.',
    comment: `Name should be meaningful. <code>aria-label</code> and <code>aria-labelledby</code> can be used to provide a name.`,
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> move focus between tabs on <code>Arrow Left</code> and <code>Arrow Right</code> press.',
    status: '',
    tests: '',
  },
];

export const tabPanelRules = [
  {
    pattern: '<b>Should</b> have a role <code>tabpanel<code>.',
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> have an accessible name connected with associated <code>tab</code>.',
    comment: `<code>aria-labelledby</code> can be used to provide a name.`,
    status: '',
    tests: '',
  },
  {
    pattern:
      '<b>Should</b> be focusable when the it does not contain any focusable elements.',
    status: '',
    tests: '',
  },
  {
    pattern: '<b>Should</b> have an associated tab.',
    status: '',
    tests: '',
  },
];

export const tabHeaderRules = [
  {
    pattern: '<b>Should</b> be only presentational.',
    status: '',
    tests: '',
  },
];

export default rules;
