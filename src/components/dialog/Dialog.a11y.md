# Dialog accessibility

<br/>

## Dialog

| Pattern                                                                        | Comment                                                                                                                                                                                                                                                 | Status                                   |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Should** have an accessible name                                             | Can be named by: <br/>- a label specified by `aria-label` prop<br/>- a value (`IDREF`) set for the `aria-labelledby` prop that refers to a visible dialog title<br/><br/>`<DialogHeader/>` component should be used as a visible dialog title.          | Implementation: DONE<br />Tests: DONE    |
| **Should** have role `dialog`                                                  |                                                                                                                                                                                                                                                         | Implementation: DONE<br />Tests: DONE    |
| **Should** have `aria-modal` set to `true`                                     |                                                                                                                                                                                                                                                         | Implementation: DONE<br />Tests: DONE    |
| **Should** get focus when it opens                                             | Focus moves to an element inside the dialog. If there is no tabbable element, focus is given to the dialog itself.                                                                                                                                      | Implementation: DONE<br />Tests: DONE    |
| **Should** have focus trap                                                     | If focus is on the last tabbable element inside the dialog, moves focus to the first tabbable element inside the dialog. <br/> If focus is on the first tabbable element inside the dialog, moves focus to the last tabbable element inside the dialog. | Implementation: DONE<br />Tests: BLOCKED |
| **Should** be closed be pressing `Esc` key                                     |                                                                                                                                                                                                                                                         | Implementation: DONE<br />Tests: DONE    |
| **Should** block user interaction outside dialog                               | User cannot tab outside dialog (focus trap). <br/> Mouse click outside dialog (on overlay) closes the dialog.                                                                                                                                           | Implementation: DONE<br />Tests: DONE    |
| **Should**, after closing, return focus to the element that invoked the dialog |                                                                                                                                                                                                                                                         | Implementation: DONE<br />Tests: BLOCKED |
| **Should** respect `prefers-reduced-motion`                                    | `prefers-reduced-motion` system setting is respected. <br/> Motion can be reduced by setting `reduceMotion` to `true` too.                                                                                                                              | Implementation: DONE<br />Tests: BLOCKED |
| **Should** have distinctive focus style                                        | Browser focus style is used                                                                                                                                                                                                                             | Implementation: DONE<br />Tests: BLOCKED |
| **Can** have a button that closes the dialog                                   | `<DialogCloseButton/>`                                                                                                                                                                                                                                  | Implementation: DONE<br />Tests: DONE    |
| **Can** have an accessible description                                         | Can be described by a value (`IDREF`) set for the `aria-describedby` prop that refers to a visible dialog description.                                                                                                                                  | Implementation: DONE<br />Tests: DONE    |

<br/>

## DialogCloseButton

| Pattern                                 | Comment                                                                       | Status                                   |
| --------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------------- |
| **Should** have an accessible name      | `<DialogCloseButton/>` `aria-label` defaults to `'Close this dialog window'`. | Implementation: DONE<br />Tests: DONE    |
| **Should** have distinctive focus style | Browser focus style is used                                                   | Implementation: DONE<br />Tests: BLOCKED |

<br/>
<br/>

## Usage

<br/>

### Code examples

- with label only

<!-- prettier-ignore -->
```jsx
<Dialog open label="Cookies consent">
  We use cookies
</Dialog>
```

- described by `<DialogBody />`

<!-- prettier-ignore -->
```jsx
<Dialog
  open
  describedBy="desc-id"
  label="Dialog label"
>
  <DialogBody id="desc-id">
    Information you provide to us directly.
  </DialogBody>
</Dialog>
```

- with `<DialogHeader />`, `<DialogCloseButton />`, `<DialogBody />`

<!-- prettier-ignore -->
```jsx
<Dialog
  open
  labelledBy="header-id"
>
  <DialogCloseButton
    onClick={onDismiss}
  />
  <DialogHeader
    id="header-id"
  >
    <h2>Header</h2>
  </DialogHeader>
  <DialogBody>
    Information you provide to us directly.
  </DialogBody>
</Dialog>
```

- with custom `<DialogCloseButton />` label

<!-- prettier-ignore -->
```jsx
<Dialog
  open 
  label="Dialog label"
>
  <DialogCloseButton
    onClick={onDismiss}
    label="Accept and close"
  />
</Dialog>
```