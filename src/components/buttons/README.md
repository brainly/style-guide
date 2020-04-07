# Buttons

Buttons are created to help user to make actions, choices and to move around the product.

### General usage examples

```jsx
import {Button} from 'style-guide';

<Button type="solid-blue" size="small">
    I am solid small button
</Button>
```

```HTML
<div class="sg-button sg-button--solid-blue sg-button--small">
    I am solid small button
</div>
```

### Types of buttons on Brainly and examples of usage

#### Primary buttons
There are 4 types of solid buttons avalaible, that are used as main action buttons on Brainly, like asking questions, login or register

```jsx
import {Button} from 'style-guide';

<Button type="solid">
    I am black button
</Button>

<Button type="solid-inverted">
    I am white button
</Button>

<Button type="solid-blue">
    I am blue button
</Button>

<Button type="solid-mint">
    I am mint button
</Button>
```

#### Secondary buttons
We have one outline button, e.g answer button on feed, which is white with black border

```jsx
import {Button} from 'style-guide';

<Button type="outline">
    I am white button with border
</Button>

```

#### Link buttons
We have 4 link buttons avalaible, black, white, peach and mustard. They are also used to create `thank you` and `mark as best` buttons

```jsx
import {Button} from 'style-guide';

<Button type="transparent">
    I am black link button
</Button>

<Button type="transparent-inverted">
    I am white link button
</Button>

<Button type="transparent-peach">
    I am peach link button
</Button>

<Button type="transparent-mustard">
    I am mustard link button
</Button>

{/* Example of the thank you button created with link button */}
<Button
  type="transparent-peach"
  icon={<Icon type={iconTypes.HEART} color={ICON_COLOR.PEACH} size={24} />}
>
  Thank you
</Button>
```

#### Additional buttons
There is also 1 additional button created for special case: facebook button, which has custom color from outside the palette.

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
| type | String |`solid` | use `solid`, `solid-inverted`, `solid-blue`, `solid-mint`,`outline`, `transparent`, `transparent-inverted`, `transparent-peach`, `transparent-mustard`, `facebook` to set the type of the Button
| href | String | `button` | sets the HTML tag for the component |
| disabled | Boolean | `false` | sets the `disabled` attribute on the Button |
| fullWidth | Boolean | `false` | adds class responsible for making button 100% of it's parent |
| icon | Node |  | optional icon inserted on the left side |
