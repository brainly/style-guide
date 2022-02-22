# Icon accessibility

<br/>

## Rules

| Pattern                                           | Comment                                                                   | Status                                   |
| ------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------- |
| **Should** have an accessible name                | Can be named by setting a value for `title` prop (defaults to icon type). | Implementation: DONE<br />Tests: DONE    |
| **Should** have role `img`                        |                                                                           | Implementation: DONE<br />Tests: DONE    |
| **Should** hide SVG paths from accessibility tree |                                                                           | Implementation: DONE<br />Tests: BLOCKED |
| **Should** respect Windows High Contrast theme    |                                                                           | Implementation: DONE<br />Tests: BLOCKED |
| **Can** have an accessible description            | Can be named by setting a value for `description` prop.                   | Implementation: DONE<br />Tests: DONE    |

<br/>
<br/>

## Usage

<br/>

### Code examples

- basic

<!-- prettier-ignore -->
```jsx
<Icon
  type="search"
/>
```

- with a title

<!-- prettier-ignore -->
```jsx
<Icon
  type="search"
  title="Start search"
/>
```

- with a description

<!-- prettier-ignore -->
```jsx
<Icon
  type="search"
  description="Search by city or city and street"
/>
```