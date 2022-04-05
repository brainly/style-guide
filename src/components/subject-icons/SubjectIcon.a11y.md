# SubjectIcon accessibility

<br/>

## Rules

| Pattern                                           | Comment                                                                   | Status                                |
| ------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------- |
| **Should** have an accessible name                | Can be named by setting a value for `title` prop (defaults to icon type). | Implementation: DONE<br />Tests: DONE |
| **Should** have role `img`                        |                                                                           | Implementation: DONE<br />Tests: DONE |
| **Should** hide SVG paths from accessibility tree |                                                                           | Implementation: DONE<br />Tests: N/A  |
| **Should** respect Windows High Contrast theme    |                                                                           | Implementation: DONE<br />Tests: N/A  |

<br/>
<br/>

## Usage

<br/>

### Code examples

- basic

<!-- prettier-ignore -->
```jsx
<SubjectIcon
  type="algebra"
/>
```

- with a title

<!-- prettier-ignore -->
```jsx
<SubjectIcon
  type="algebra"
  title="geometry"
/>
```
