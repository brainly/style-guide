# Rating accessibility

<br/>

## Rating

| Pattern                                                                             | Comment                                                                                                                                                                                             | Status                                   |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **Should** have 3:1 contrast ratio                                                  | white - yellow: 3.05:1; white - grey: 4.37:1; yellow - grey: 1.44:1 <br/> To low contrast can [affect different people with visual impairments](https://whocanuse.com/?b=687b8c&c=c98600&f=20&s=b). | Implementation: DONE<br />Tests: BLOCKED |
| **Should** have element with `radiogroup` role wrapping radio inputs                |                                                                                                                                                                                                     | Implementation: DONE<br />Tests: BLOCKED |
| **Should** have accessible label describing current rate value                      | `aria-label` defaults to `"current rate"`                                                                                                                                                           | Implementation: DONE<br />Tests: DONE    |
| **Should** have accessible label describing rate action with min and max rate value | `{activeText}, min: 1, max: {metricSize}`                                                                                                                                                           | Implementation: DONE<br />Tests: DONE    |

> <mark>Using `noLabel` option will affect different people with visual impairments.
> <br/>Omitting `activeText` for an active `Rating` results in a non-labelled `onChange` action.</mark>

<br/>

## Star

| Pattern                                                              | Comment                            | Status                                |
| -------------------------------------------------------------------- | ---------------------------------- | ------------------------------------- |
| **Should** have an accessible label                                  |                                    | Implementation: DONE<br />Tests: DONE |
| **Should not** be accessible when is not active                      |                                    | Implementation: DONE<br />Tests: DONE |
| **Should** be focusable                                              | Browser focus style is used        | Implementation: DONE<br />Tests: DONE |
| **Should** have `radio` role                                         |                                    | Implementation: DONE<br />Tests: DONE |
| **Should** fire `onChange` on click, space and arrows (left & right) | It is not possible to test arrows. | Implementation: DONE<br />Tests: DONE |

<br/>
<br/>

## Usage

<br/>

### Code examples

- basic

```jsx
<Rating />
```

- active with `activeText` & `counterText`

<!-- prettier-ignore -->
```jsx
<Rating
  active
  activeText="Rate this answer"
  counterText="32 votes"
  onChange={onChange}
/>
```

- with a current rate value `rate` and `metricSize`

<!-- prettier-ignore -->
```jsx
<Rating
  rate={2.2}
  metricSize={10}
/>
```

- with a custom label for current value

<!-- prettier-ignore -->
```jsx
<Rating
  rate={2.2}
  aria-label="Our rate:"
/>
```

### Resources

- <https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating>
- <https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html>
- <https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--rating/>
- <https://lunarlogic.github.io/starability/>
- <https://decathlon.github.io/vitamin-web/@vtmn/showcase-css/iframe.html?id=components-rating--overview&viewMode=story>
- <https://baseweb.design/components/rating/>
- <https://dev.to/inhuofficial/5-star-rating-system-actually-accessible-no-js-no-wai-aria-3idl>
