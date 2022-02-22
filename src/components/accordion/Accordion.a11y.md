# Accordion accessibility

<br/>

## Accordion

| Pattern                         | Comment | Status                                  |
| ------------------------------- | ------- | --------------------------------------- |
| **Can** have an accessible name |         | Implementation: TO DO<br />Tests: TO DO |

<br/>

## AccordionItem

| Pattern                                                                                                                  | Comment                                                                                                                                                                                               | Status                                   |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Should** expend/collapse content by pressing `Space`/`Enter` and mouse click                                           |                                                                                                                                                                                                       | Implementation: DONE<br />Tests: DONE    |
| **Should** have element with role `button` in header                                                                     |                                                                                                                                                                                                       | Implementation: DONE<br />Tests: DONE    |
| **Should** have element with role `heading` and `aria-level` in title                                                    | `aria-level` can be set by `ariaHeadingLevel` prop.<br/>`ariaHeadingLevel` defaults to `2`.                                                                                                           | Implementation: DONE<br />Tests: DONE    |
| **Should** have element with role `region` and and an accessible name                                                    |                                                                                                                                                                                                       | Implementation: DONE<br />Tests: DONE    |
| **Should** have `aria-expanded="true"` set on button element when expanded                                               |                                                                                                                                                                                                       | Implementation: DONE<br />Tests: DONE    |
| **Should** have `aria-controls` set on button                                                                            |                                                                                                                                                                                                       | Implementation: DONE<br />Tests: DONE    |
| **Should** have `hidden` set on region element when collapsed                                                            |                                                                                                                                                                                                       | Implementation: DONE<br />Tests: DONE    |
| **Should** respect `prefers-reduced-motion`                                                                              | `prefers-reduced-motion` system setting is respected.                                                                                                                                                 | Implementation: DONE<br />Tests: BLOCKED |
| **Should** have distinctive focus style for button element                                                               | Button element has underline for focus and native browser style for focus-visible.<br/>AccordionItem `border-color` is changed to `gray-40` when spacing (`<Accordion />` prop) is not set to `none`. | Implementation: DONE<br />Tests: BLOCKED |
| **Should** have `aria-disabled` set to `true` on button element if collapsing the item is not permitted                  |                                                                                                                                                                                                       | Implementation: TODO<br />Tests: TODO    |
| **Should** be tabbable:<br/>- AccordionItem by AccordionItem<br/>- element by element in the content when it is expanded |                                                                                                                                                                                                       | Implementation: DONE<br />Tests: BLOCKED |

<br/>
<br/>

## Usage

<br/>

### Code examples

- with `<AccordionItem />`

<!-- prettier-ignore -->
```jsx
<Accordion>
  <AccordionItem title="Item 1">
    Accordion Item 1 Description
  </AccordionItem>
  <AccordionItem title="Item 2">
    Accordion Item 2 Description
  </AccordionItem>
</Accordion>
```

- with a custom heading level for item

<!-- prettier-ignore -->
```jsx
<Accordion>
  <AccordionItem title="Item 1" ariaHeadingLevel={4}>
    Accordion Item 1 Description
  </AccordionItem>
</Accordion>
```