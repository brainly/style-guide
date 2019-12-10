# Form elements

All the form elements at Brainly have to basic variants in terms of:
1. Color

    | Color | Value | 
    | :- | :- | 
    | default | $graySecondaryLightest |
    | white | $white |

2. Size

    | Size | Value | 
    | :- | :- | 
    | normal | 40px |
    | large | 56px |


As form elements we consider:

### Inputs

Examples of usage:

```jsx
import {Input} from 'style-guide';

<Input
    size="large"
    placeholder="This is invalid example"
    invalid
    color="white"
/>
```

```HTML
<input placeholder="placeholder" type="text" class="sg-input" value="">
```

### Textarea

Examples of usage:

```jsx
import {Textarea} from 'style-guide';

<Textarea placeholder="placeholder" color="white" />
```

```HTML
<textarea placeholder="placeholder" class="sg-textarea"></textarea>
```

### Selects

Examples of usage:

```jsx
import {Select} from 'style-guide';

<Select options={[
    {value: 'option1', text: 'Option1'},
    {value: 'option2', text: 'Option2'}
]} />
```

```HTML
<select class="sg-select__element">
    <option value="option1">Option1</option>
    <option value="option2">Select selector</option>
    <option value="option3">Select selector</option>
</select>
```

