const rules = [
  {
    pattern: "<b>Should</b> have 4.5:1 contrast ratio.",
    status: "DONE",
    tests: "N/A",
  },
  {
    pattern: "<b>Should</b> have an accessible name for a close button.",
    comment:
      'Button can be named by <code>closeButtonLabel</code> prop, defaults to <code>"close"</code>.',
    status: "DONE",
    tests: "DONE",
  },
  {
    pattern: "<b>Should</b> have an accessible name for an icon.",
    comment:
      "Icon can be named by <code>iconTitle</code> prop, defaults to icon type.",
    status: "DONE",
    tests: "DONE",
  },
  {
    pattern:
      "<b>Should</b> have a possibility to hide an icon from accessibility tree.",
    comment: "Icon can be hidden by <code>iconAriaHidden</code> prop.",
    status: "DONE",
    tests: "DONE",
  },
  {
    pattern: "<b>Can</b> have an accessible name.",
    comment: `Can be named by children, a label specified by <code>aria-label</code> prop or a value 
      (<code>IDREF</code>) set for the <code>aria-labelledby</code> prop that refers to an element.`,
    status: "DONE",
    tests: "DONE",
  },
];
export default rules;