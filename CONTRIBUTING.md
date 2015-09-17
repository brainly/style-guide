# Style Guide Development Guidelines

If you want to update Style Guide, you should follow the given guidelines and conventions.

* [Design Conventions](#design-conventions)
 - [Components](#components)
    - [Composing A Modified Block](#exclamation-composing-a-modified-block)
    - [Combined Classes](#combined-classes)
    - [Base Variables](#base-variables)
    - [Variables In Components](#variables-in-components)
    - [User Content](#user-content)

 - [Modifiers](#modifiers)
    - [Modifier Dictionary](#modifier-dictionary)
    - [Combine Effects](#combine-effects)

 - [Containers](#containers)
    - [How To Think About Containers And Holes](#how-to-think-about-containers-and-holes)
    - [Parent-Child Relationship](#parent--child-relationship)

* [Technical Discipline](#technical-discipline)
 - [Bumping Release Version](#bumping-release-version)
 - [Rebuilding Fonts](#rebuilding-fonts)
 - [Create/Recreate s3 distribution](#createrecreate-s3-distribution)
 - [Cose Style](#code-style)


## Design Conventions


### COMPONENTS

#### :exclamation: Composing A Modified Block

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

#### Combined Classes

> You MUST NOT combine several block classes on a single HTML element

If you have a combination like `<input class="mint-block1 mint-block2">` it means that you have incorrectly separated responsibilities in your component hierarchy.

> There MUST NOT be rules with combined classes selector, e.g. `.mint-block1 .mint-block2` is a bad thing.


#### Base Variables

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

#### Variables In Components

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



### MODIFIERS

#### Modifier Dictionary

We have standardized set of words you should use when adding modifiers to blocks.

- If you component changes only in one dimension:
 - width:  `xnarrow` `narrow` `wide` `xwide` `full-width`
 - height: `xshort` `short` `tall` `xtall` `full-height`

- If it changes in both sizes: `xsmall` `small` `large` `xlarge`

- Behavior changes:
 - `non-responsive`
 - `obscured` vs `standout`
 - `disabled`
 - `active` vs `inactive`

- Combinations of behaviors:
 - `padding-wide`
 - `padding-tall`
 - `padding-large`

All components are **responsive** by default, so there is no need for modifiers specific to responsiveness (exception: `non-responsive`)


#### Combine Effects

If you need to combine a certain effect from several modifiers, put those modifiers together in the HTML element class attribute.

> There SHOULD NOT be CSS rules with selectors for several modifiers, e.g. `.mint-block--mod1 .mint-block--mod2` is a bad thing.

If you need a special effect to be applied for a combination of modifiers, *which interfere with each other* - create a new modifier.





### CONTAINERS

#### How To Think About Containers And Holes

Container is a **block** in BEM terminology. By default container consists of "holes" - thin wrapper elements where the blocks will be put by the component user.

> Every container MUST define at least one hole.

Holes are needed to achieve loose coupling between parents and children components.

> Parent container MUST NOT override child component styles.

If you have some complex piece of UI and you are in doubt how to split it in blocks - *start with defining a container with holes first*.




#### Parent-Child Relationship
Block is a reusable and self-contained entity with *high cohesion* with its elements.

> Block MUST NOT override styles for other blocks elements.

> All element's styles SHOULD be defined in the scope of it's parent block.

Container, on the contrary, is loosely coupled to its child blocks.

> Containers SHOULD NOT define styles for it's child blocks.

There is a particular "code smell" when working with containers: *if parent container modifies child block, then this styles should be refactored to a block modifier*

> Containers SHOULD use "holes" to influence child blocks position, padding, offset.




### Technical Discipline

#### Bumping Release Version

This project has semver versioning.

To simplify version bumping you can use [mversion](https://www.npmjs.com/package/mversion).
`mversion patch -m` will patch package.json and create a corresponding commit + tag

**Note:** if there is no changes to resulting `style-guide.css`, then use `mversion pr -m`.
  It will create a `prerelease` version instead of patch.

To bump the version correctly you should follow these steps:

1. Create a PR

1. Get :+1:s from two contributors

1. Rebase and merge your branch

1. Get the freshest master  
  ```
  git checkout master

  git pull
  ```
1. bump version in master as a separate commit (with tag)  
  ```
  mversion patch -m
  ```
1. `push` changes to upstream  
  ```
  git push
  
  git push --tags
  ```

#### Rebuilding Fonts

If you haven't run `bootstrap.sh`, you should do it right now :)

Run `./scripts/build-fonts.sh`.

This command will transform all `svg` files from `icons` directory in a woff font.

#### Create/Recreate s3 distribution

To be able to work with AWS you need to have AWS-related keys defined in your environment:

 * `AWS_ACCESS_KEY` should be available as environment variable
 * `AWS_SECRET_ACCESS_KEY` should be available as environment variable

Those keys will be passed to docker container on every interaction with s3 or cloudfront.

Run `./scripts/create-s3-distribution.sh` to create the initial setup for s3 distribution.

**Note:** This should be done once when you setup the deployment pipeline of the project.
*This step has already been applied for this repo.*

#### Code Style
All code style details are located in `.scss-lint.yml` file.

To check code style for project simply run:
`./scripts/run-scss-lint.sh`

You can as well run code style check for specified file using command like:
`./scripts/run-scss-lint.sh src/sass/_basics.scss`

To simplify work with code style checking install plugin 'scss-lint' for WebStorm.
To setup it set global path to file `scripts/ide-run-scss-lint-from-docker.sh` as `SCSS Lint exe` option.
