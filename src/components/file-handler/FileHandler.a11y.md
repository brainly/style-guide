# FileHandler accessibility

<br/>

## Default

| Pattern                                                             | Comment                                                                          | Status                                   |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------- |
| **Should** have `link` or `button` role set for interactive element | When `onClick` is provided, role `button` is set, in other cases `link` is used. | Implementation: DONE<br />Tests: DONE    |
| **Should** announce an uploading status                             | Status has `aria-live="polite"`                                                  | Implementation: DONE<br />Tests: DONE    |
| **Should** have a thumbnail hidden from accessibility tree          |                                                                                  | Implementation: DONE<br />Tests: DONE    |
| **Should** be focusable by tabbing                                  |                                                                                  | Implementation: DONE<br />Tests: BLOCKED |
| **Can** have a close button with an accessible name                 | Name defaults to `'Close'`                                                       | Implementation: DONE<br />Tests: Done    |

<br/>
<br/>

## Usage

<br/>

### Code examples

- as a link

```jsx
<FileHandler src="/cat.jpg" thumbnailSrc="/cat.jpg">
  cat.jpg
</FileHandler>
```

- as a button

<!-- prettier-ignore -->
  ```jsx
<FileHandler
  onClick={handleOnClick}
>
  cat.jpg
</FileHandler>
```

- with close button

```jsx
<FileHandler
  src="/cat.jpg"
  onClose={handleOnClose}
  ariaCloseButtonLabel="Remove This file"
>
  cat.jpg
</FileHandler>
```

- with custom status labels

```jsx
<FileHandler
  src="/cat.jpg"
  statusLabel={{
    loading: 'loading...',
    uploaded: 'File uploaded!',
  }}
>
  cat.jpg
</FileHandler>
```
