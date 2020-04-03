# Buttons

Buttons are created to help user to make actions, choices and to move around the product.

### General usage examples

```jsx
import {Button} from 'style-guide';

<Button type="primary-blue" size="small">
    I am primary small button
</Button>
```

```HTML
<div class="sg-button sg-button--primary-blue sg-button--small">
    I am primary small button
</div>
```

### Types of buttons on Brainly and examples of usage

#### Primary buttons
There are 4 types of primary buttons avalaible, that are used as main action buttons on Brainly, like asking questions, login or register

```jsx
import {Button} from 'style-guide';

<Button type="primary">
    I am black button
</Button>

<Button type="primary-inverted">
    I am white button
</Button>

<Button type="primary-blue">
    I am blue button
</Button>

<Button type="primary-mint">
    I am mint button
</Button>
```

#### Secondary buttons
We have one secondary button, e.g answer button on feed, which is white with black border

```jsx
import {Button} from 'style-guide';

<Button type="secondary">
    I am white button with border
</Button>

```

#### Link buttons
We have 4 link buttons avalaible, black, white, peach and mustard. They are also used to create `thank you` and `mark as best` buttons

```jsx
import {Button} from 'style-guide';

<Button type="link-button">
    I am black link button
</Button>

<Button type="link-button-inverted">
    I am white link button
</Button>

<Button type="link-button-peach">
    I am peach link button
</Button>

<Button type="link-button-mustard">
    I am mustard link button
</Button>

{/* Example of the thank you button created with link button */}
<Button
  type="link-button-peach"
  icon={<Icon type={iconTypes.HEART} color={ICON_COLOR.PEACH} size={24} />}
>
  Thank you
</Button>
```

#### Additional buttons
There are also 1 additional button created for special case: facebook button, which has custom color from outside the palette.

```jsx
import {Button} from 'style-guide';

<Button type="facebook">
    I am FB button
</Button>
```

#### Buttons with icons
We have 3 possible options in our style-guide regarding buttons with icons, each have a standard icon size, which should be perserve.

```jsx
import {Button} from 'style-guide';

<Button
    size="small"
    type="facebook"
    icon={<Icon type={iconTypes.FACEBOOK} color="light" size={16} />}
>
    Log in
</Button>

<Button
    type="facebook"
    icon={<Icon type={iconTypes.FACEBOOK} color="light" size={24} />}
>
    Log in
</Button>

<Button
    size="large"
    type="facebook"
    icon={<Icon type={iconTypes.FACEBOOK} color="light" size={32} />}
>
    Log in
</Button>
```

```HTML
<button class="sg-button sg-button--large sg-button--facebook">
    <span class="sg-button__icon sg-button__icon--large">
        <div class="sg-icon sg-icon--light sg-icon--x32">
            <svg class="sg-icon__svg"></svg>
        </div>
    </span>
    <span class="sg-button__text">Button</span>
</button>
```

| Prop name | Type | Default | Description |
| :- | :- | :-: | :- |
| size | String | `medium`| use `small`, `medium` or `large` to set the size of the Button
| type | String |`primary` | use `primary`, `primary-inverted`, `primary-blue`, `primary-mint`,`secondary`, `link-button`, `link-button-inverted`, `link-button-peach`, `link-button-mustard`, `facebook` to set the type of the Button
| href | String | `button` | sets the HTML tag for the component |
| disabled | Boolean | `false` | sets the `disabled` attribute on the Button |
| fullWidth | Boolean | `false` | adds class responsible for making button 100% of it's parent |
| icon | Node |  | optional icon inserted on the left side |

