# HomeButton accessibility

<br/>

## Rules

| Pattern                             | Comment                                                                                   | Status                                |
| ----------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------- |
| **Should** have an accessible name  | Can be named by setting a value for `aria-label` prop (defaults to `"{logo type} home")`. | Implementation: DONE<br />Tests: DONE |
| **Can** have an accessible alt text |                                                                                           | Implementation: DONE<br />Tests: Done |

<br/>
<br/>

## Usage

<br/>

### Code examples

- basic

```jsx
<HomeButton />
```

- with a label

<!-- prettier-ignore -->
```jsx
<HomeButton
  aria-label="Brainly strona główna"
/>
```

- with an alt text

<!-- prettier-ignore -->
```jsx
<HomeButton
  alt="Brainly Plus Extra Special"
/>
```
