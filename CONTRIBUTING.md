## Style Guide Development Guidelines

If you want to update Style Guide, you should follow the given guidelines and conventions.

#### :exclamation: How to compose a modified block?

The most often question related to BEM is "How do I actually **use** modifiers and elements?"

Here is an example:

```scss
$blockFont: $fontFamilyPrimary;
$tintedElementColor: $graySecondary;
$blockLightColor: $white;

.mint-block {

  // this is an element of mint-block, note "__" separator
  &__element {
    width: 200px;
    font-family: $blockFont;

     // this is a modifier for element
     &--tint {
       color: $tintedElementColor;
     }
  }

  // this is a modifier of the entire mint-block, note "--" separator
  &--light {
    background-color: $blockLightColor;
  }
}

```

You use the styles defined above like that:
```html
<div class="mint-block mint-block--light">
  <div class="mint-block__element mint-block__element--tint">
     Here goes some block content
  </div>
</div>
```

#### Base variables

> All essential variables MUST reside in `sass/config.sass` file.

Essential variables are global throughout the theme, and can affect any component:

* colors (example: `$mintPrimary`)
* font size (example: `$font`)
* font family (example: `$fontFamilyPrimary`)
* essential dimensions (example: `$iconBoostValue`)

> Base variables MUST NOT be used directly in components

Base variables should be separated from components by a layer of indirection.   Every component should define it's own specific variables referencing the base variables like that:

```scss
$bubbleBackground: $white;
$bubbleBackgroundDark: $graySecondaryLight;
$bubbleBorderColor: $graySecondary;
$bubbleBorderRadius: 5px;
```
This rule will help us track dependencies between components and theme and allow us to change tweak component styles in a more granular approach.

#### Variables in components

> Use component-level variables for all changeable parameters.

Reasons:

1. Gives the overview for all **changeable parameters** for a given components
1. Allows easily **reuse** the variable
1. Allows **referencing** parameters of other components
1. Makes refactoring easier

> Do not introduce meaningless variables.

> Every introduced variable SHOULD represent some relationship.

Use explicit values like `20px` by default and introduce variables only if you need to reference a base variable or create a relationship.

For example, if you need to create a component whose height is double of it's width, you should do:

```scss
$myBlockWidth: 20px;

.my-block {
  width: $myBlockWidth;
  height: 2 * $myBlockWidth;
}
```

#### Containers

Container is a **block** in BEM terminology. By default container consists of "holes" - thin wrapper elements where the blocks will be put by the component user.

> Every container MUST define at least one hole.

Holes are needed to achieve loose coupling between parents and children components.

> Parent container MUST NOT override child component styles

If you have some complex piece of UI and you are in doubt how to split it in blocks - *start with defining a container with holes first*.

#### User content

You can omit BEM rules only in the case when you need to style user content.

> Tags in user content SHOULD extend base components

Here is an example of overriding user content in a specific block:

```scss
.my-container {
  &__content {
    & > ul {
      @extend .mint-list;
    }
    & > ul > li {
      @extend .mint-list__element;
    }
  }
}
```

> User content styles MUST be defined by component user in his specific stylesheet

#### Parent-child relationship
Block is a reusable and self-contained entity with *high cohesion* with its elements.

> Block MUST NOT override styles for other blocks elements.

> All element's styles SHOULD be defined in the scope of it's parent block.

Container, on the contrary, is loosely coupled to its child blocks.

> Containers SHOULD NOT define styles for it's child blocks.

There is a particular "code smell" when working with containers: *if parent container modifies child block, then this styles should be refactored to a block modifier*

> Containers SHOULD use "holes" to influence child blocks position, padding, offset.

#### Modifiers

If you need to combine a certain effect from several modifiers, put those modifiers together in the HTML element class attribute.

> There SHOULD NOT be CSS rules with selectors for several modifiers, e.g. `.mint-block--mod1 .mint-block--mod2` is a bad thing.

If you need a special effect to be applied for a combination of modifiers - create a new modifier.

#### Combined classes

> You MUST NOT combine several block classes on a single HTML element

If you have a combination like `<input class="mint-block1 mint-block2">` it means that you have incorrectly separated responsibilities in your component hierarchy.

> There MUST NOT be rules with combined classes selector, e.g. `.mint-block1 .mint-block2` is a bad thing.
