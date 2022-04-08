# Link accessibility

<br/>

## Link `as="a"`

| Pattern                                                                                                | Comment                                                                                                                                                                                | Status                                        |
| ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| **Should** have an accessible name                                                                     | Name should be meaningful (ex. "Read more about vitamin C" instead of "Read more"). `aria-label` can be used to provide a name.                                                        | Implementation: DONE<br />Tests: DONE         |
| **Should** have a role `link`                                                                          |                                                                                                                                                                                        | Implementation: DONE<br />Tests: DONE         |
| **Should** cause the user agent to navigate to a new resource                                          |                                                                                                                                                                                        | Implementation: DONE<br />Tests: BLOCKED      |
| **Should** be focusable and tabable                                                                    | `href` can't be empty.                                                                                                                                                                 | Implementation: DONE<br />Tests: DONE         |
| **Should** have visible focus style                                                                    | Browser focus style is used                                                                                                                                                            | Implementation: DONE<br />Tests: BLOCKED      |
| **Should** have a non-color indicator                                                                  | Ex. underline, bold (italic is not accessible). Default `Link` weight is `bold`. `underlined`, `emphasised` or `weight` props can also be provided.                                    | Implementation: DONE<br />Tests: BLOCKED      |
| **Should** have a color indicator with 4.5:1 contrast ratio to the background                          | Default `Link` color is `text-blue-60` (contrast to white: 9.11:1). Another `text-color` may also be specified to meet this requirement                                                | Implementation: DONE<br />Tests: BLOCKED      |
| **Should** have a color indicator with 3:1 contrast ratio to the surrounding text                      | Default `Link` color is `text-blue-60` (contrast to black: 2.3:1, too low contrast is compensated by bold weight). Another `text-color` may also be specified to meet this requirement | Implementation: DONE<br />Tests: BLOCKED      |
| **Should** have `cursor: pointer`                                                                      |                                                                                                                                                                                        | Implementation: DONE<br />Tests: BLOCKED      |
| **Should** be activated by pressing `Enter` and mouse click                                            |                                                                                                                                                                                        | Implementation: DONE<br />Tests: BLOCKED      |
| **Can** have an accessible label (and/or icon) that indicates opening in new tab                       |                                                                                                                                                                                        | Implementation: IN PROGRESS<br />Tests: TO DO |
| **Can** have an accessible label with file size&format (and/or icon) that indicates downloading a file |                                                                                                                                                                                        | Implementation: TO DO<br />Tests: TO DO       |

> <mark>Element, that looks like a link, but doesn't cause the user agent to navigate to a new resource but have onClick listener is a button and should meet the accessibility requirements for [Link `as="button"`](#link-asbutton).</mark>

<br/>

## Link `as="button"`

| Pattern                                                                           | Comment                                                                                                                                                                                      | Status                                    |
| --------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **Should** have an accessible name                                                | Name should be meaningful (ex. "Read more about vitamin C" instead of "Read more"). `aria-label` can be used to provide a name.                                                              | Implementation: DONE<br />Tests: DONE     |
| **Should** have a role `button`                                                   |                                                                                                                                                                                              | Implementation: DONE<br />Tests: DONE     |
| **Should** be focusable and tabable                                               |                                                                                                                                                                                              | Implementation: DONE<br />Tests: DONE     |
| **Should** have visible focus style                                               | Browser focus style is used                                                                                                                                                                  | Implementation: DONE<br />Tests: BLOCKED  |
| **Should** have a non-color indicator                                             | Ex. underline, bold (italic is not accessible). Default `Link` weight is `bold`. `underlined`, `emphasised` or `weight` props can also be provided.                                          | Implementation: DONE<br />Tests: BLOCKED  |
| **Should** have a color indicator with 4.5:1 contrast ratio to the background     | Default `Link` color is `text-blue-60` (contrast to white: 9.11:1). Another `text-color` may also be specified to meet this requirement                                                      | Implementation: DONE<br />Tests: BLOCKED  |
| **Should** have a color indicator with 3:1 contrast ratio to the surrounding text | Default `Link` color is `text-blue-60` (contrast to black: 2.3:1, too low contrast is compensated by bold weight). Another `text-color` may also be specified to meet this requirement. <br> | Implementation: TO DO<br />Tests: BLOCKED |
| **Should** have `cursor: pointer`                                                 |                                                                                                                                                                                              | Implementation: DONE<br />Tests: BLOCKED  |
| **Should** fire `onClick` on `Space`/`Enter` press and mouse click                |                                                                                                                                                                                              | Implementation: DONE<br />Tests: DONE     |
| **Should** have a visible `disabled` state                                        |                                                                                                                                                                                              | Implementation: DONE<br />Tests: BLOCKED  |

<br/>
<br/>

## Usage

<br/>

### Code examples

- `as="a"`

<!-- prettier-ignore -->
```jsx
<Link
  href="https://example.com/"
>
  Read more about our products
</Link>
```

- `as="button"`

<!-- prettier-ignore -->
```jsx
<Link
  as="button"
  onClick={onClick}
>
  Check our offer
</Link>
```

- with a meaningful label

<!-- prettier-ignore -->
```jsx
<Link
  href="https://example.com"
  aria-label="Read more about our products"
>
  Read more
</Link>
```

- with an underline to indicate it's a link

<!-- prettier-ignore -->
```jsx
<Link
  href="https://example.com"
  underlined
>
  Privacy policy
</Link>
```

- disabled

<!-- prettier-ignore -->
```jsx
<Link
  as="button"
  onClick={onClick}
  disabled
>
  Check our offer
</Link>
```

### Resources

- <https://www.a11y-collective.com/blog/the-perfect-link/>
- <https://www.levelaccess.com/methods-of-indicating-the-purpose-of-a-link/>
- <https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8.html>
- <https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html>
- <https://www.scottohara.me/blog/2018/10/03/unbutton-buttons.html>
- <https://medium.com/@svinkle/why-let-someone-know-when-a-link-opens-a-new-window-8699d20ed3b1#:~:text=Specifically%2C%20check%20out%20the%20target,new%20tab%20or%20window%20automatically.>