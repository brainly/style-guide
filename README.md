# Brainly Style Guide

This project is a reference style guide for all frontend components used in Brainly and styled with "Mint" theme.

We have created this styleguide with this purposes in mind:

* Should serve as an **overview of all basic components** for the new brand
* Should be a reference implementation of our vision of **BEM methodology**
* Should be **a single source of truth** for all basic styles for "mint" theme
* Should be an example of good CSS practices we try to promote across the company

The target audience is everyone who will be dealing with frontend components.
If you are reading this document - the chances are high that it is you.

Bear in mind: 

  * If you want to *create a component with mint theme* you MUST refer to this style guide
  * If you are to *create a totally new component* you MUST add it in the style guide
  * If you want to *reuse any component* you SHOULD refer to this style guide for best practices and examples


Table of contents:

* [Methodology](#methodology)
* [Guidelines](#guidelines)
* [How To](#howto)
* [Contribution](#contribution)

## Methodology

We use BEM methodology to create and style our components. 
You can find more details about BEM [here](https://en.bem.info/method/definitions/#what-is-bem).


We have chosen BEM because it gives us these benefits:


* Streamlined thought process for splitting stuff in components
	* Unified vocabulary
	* Simple rules
* Encapsulated, self-sufficient and context-independent building blocks
	* Components can be reused 
	* Components can be changed independently
	* Loose coupling between parent and child components
* No problems with specificity
	* Overriding styles is straightforward
	* No need for `!important`
* No global overrides
  * No possibility to introduce hard-to-find regressions
  * Bright future, ponies and unicorns are guaranteed 
* Styles are independent from markup
  * Freedom to chose view layer libraries
  * No need to redo the styling routine


#### Terminology 
* **Block** is an independent entity, or component of an application.  
  A block can be either simple or compound (containing other blocks).
* **Element** is a part of a block that performs a certain function.  
  Elements only make sense in the context of the block that they belong to.
* **Modifier** is used when we want to add a particular attribute/property/variant that will change our block or element.
* **Container** is a compound block, which can contain other blocks.  
  The basic container defines "holes" (placeholders) where other blocks can be put.  
  Containers only make sense only when they have actual blocks included.
* **Hole** is a thin wrapper for a block used for changing position, offset, paddings and alignment of the contained components.  
Holes only make sense in the context of the certain container.
* **User content** is a dynamically added content, which lack BEM classes and contains mainly text formatting tags like `b`, `i`, `br`, `p`, `ul`, `ol`, etc.

## Guidelines

If you are a component author you should follow this guidelines on top of BEM.

#### Base variables

> All essential variables MUST reside in `sass/config.sass` file.

Essential variables are global thoughout the theme, and can affect any component:

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

Do not introduce meaningless variables.  
Use explicit values like `20px` by default and introduce variables only if you need to reference a base variable or create a relationship.

For example, if you need to create a component whose height is double of it's width, you should do: 

```scss
$myBlockWidth: 20px;

.my-block {
  width: $myBlockWidth;
  height: 2 * $myBlockWidth;
}
```

> Every introduced variable SHOULD represent some relationship

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
    & > li {
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

## HowTo

#### Have a look at style guide

If you are trying to do it from scratch:

1. Clone repo
2. Run `npm install` in the root of the project
3. Run `gulp sass:docs`
4. Open corresponding files in the `docs` directory in your browser:
  * `docs/basics.html` for basic components
  * `docs/components.html` for complex components
  * `docs/containers.html` for containers

**Note**: All changes for the styleguide will be rebuilt automatically on every merge/rebase/checkout.

#### Rebuild fonts

Run `gulp docker:icons`.

This command will transform all `svg` files from `icons` directory in a woff font.

## Contribution

To contribute, please read [Contributing file](CONTRIBUTING.md)

## TODO
1. Add note about supported browser
1. Host on s3 (auto-update on commit) for easy preview
