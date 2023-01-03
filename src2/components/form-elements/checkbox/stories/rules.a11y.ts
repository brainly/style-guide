const rules = [
  {
    pattern: "<b>Should</b> have a role <code>checkbox</code>.",
    status: "DONE",
    tests: "DONE",
  },
  {
    pattern: "<b>Should</b> be focusable and tabable.",
    status: "DONE",
    tests: "DONE",
  },
  {
    pattern: "<b>Should</b> have an accessible name.",
    comment: `<code>Checkbox</code> can be named by adding children. 
    Children should be purely presentational and do not include interactive elements.`,
    status: "DONE",
    tests: "DONE",
  },
  {
    pattern:
      "<b>Should</b> have visible checked / unchecked / indeterminate / disabled style.",
    status: "DONE",
    tests: "N/A",
  },
  {
    pattern: "<b>Should</b> have visible focus and hover style.",
    status: "DONE",
    tests: "N/A",
  },
  {
    pattern:
      "<b>Should</b> have a label with 4.5:1 contrast ratio against the background.",
    comment:
      "<code>dark</code> against white: 21:1, <code>light</code> against black: 20.9:1.",
    status: "DONE",
    tests: "N/A",
  },
  {
    pattern:
      "<b>Should</b> have a color indicator with 3:1 contrast ratio against the background.",
    comment:
      "<code>dark</code> against white: 21:1, <code>light</code> against black: 20.9:1.",
    status: "DONE",
    tests: "N/A",
  },
  {
    pattern: "<b>Should</b> respect Windows High Contrast mode.",
    status: "DONE",
    tests: "N/A",
  },
  {
    pattern:
      "<b>Should</b> have descriptive information about required and invalid state.",
    status: "DONE",
    tests: "DONE",
  },
  {
    pattern: "<b>Should</b> respect prefers reduce motion settings.",
    status: "TO DO",
    tests: "N/A",
  },
  {
    pattern:
      "<b>Should</b> be activated by pressing <code>Space</code> and mouse click.",
    status: "DONE",
    tests: "DONE",
  },
  {
    pattern: "<b>Can</b> have a clickable label.",
    comment:
      "Default clickable area of checkbox is 32x32px, children of the Checkbox are also clickable.",
    status: "DONE",
    tests: "DONE",
  },
];
export default rules;