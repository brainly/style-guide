# Flexbox

Before using these utilities, you should be familiar with [CSS3 Flexible Box spec](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

### Usage examples

```jsx
import Flex, {FLEX_DIRECTION,FLEX_JUSTIFY_VALUES} from 'style-guide/src/components/flex/Flex';

<Flex direction={FLEX_DIRECTION.COLUMN} justifyContent={FLEX_JUSTIFY_VALUES.SPACE_BETWEEN}>
    <div>flex child element</div>
    <div>flex child element</div>
</Flex>
```

```HTML
<div class="sg-flex sg-flex--column sg-flex--justify-content-space-between">
    <div>flex child element</div>
    <div>flex child element</div>
</div>
```

### Using spacing util in Flex

These variables are used for margins properties in Flex component:

Variable | Value
------------ | -------------
xxs | 4px
xs | 8px
x | 16px
m | 24px
l | 40px
xl | 64px
xxl |  104px
xxxl | 168px
xxxxl | 272px

There are several options that are avalaible in flex in terms of margin, which are taken from standard CSS properties. Examples:

```jsx
import Flex, {FLEX_DIRECTION,FLEX_JUSTIFY_VALUES} from 'style-guide/src/components/flex/Flex';


<Flex margin={FLEX_MARGINS.M}>flex children elements</Flex>

// This will output component that have m - 24px from each side
```

```HTML
<div class="sg-flex sg-flex--margin-m">flex children elements</div>

<!-- this is the same example in HTML -->
```

```css
.sg-flex--margin-m {
    margin: 24px
}
/* and the above class in CSS */
```

Using the above pattern, we have avalaible options of `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft` with all the presented spacing values.
