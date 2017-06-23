![Brainly Style Guide](https://i.imgur.com/8MMAa2J.png)

[![Build Status](https://travis-ci.org/brainly/style-guide.svg)](https://travis-ci.org/brainly/style-guide)
[![Dependency Status](https://david-dm.org/brainly/style-guide.svg)](https://david-dm.org/brainly/style-guide)
[![devDependency Status](https://david-dm.org/brainly/style-guide/dev-status.svg)](https://david-dm.org/brainly/style-guide#info=devDependencies)

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

* [Supported Browsers](#supported-browsers)
* [Methodology](#methodology)
* [How To](#howto)
* [Contribution](#contribution)

## Supported Browsers

We support the following browsers (90% of our traffic comes from these browsers):

| Browser | Versions  | Total share in global traffic |
| ---- | ---- | ---- |
| Google Chrome | 28+ | 61.82% | 
| Safari | 7+ | 12.54% |
| YaBrowser | 15+ | 4.40% |
| Firefox | 42+ | 4.24% |
| Android Webview | 30+ | 3.45% |
| Android Browser | 4.0+ | 3.36% |
| UCBrowser | 8+ | 3.14% |
| Opera | 33+ | 1.98% |
| Opera Mini | 7+ | 1.63% |
| Internet Explorer | 11+ | 1.58% |
| Edge | 11+ | 1.19% |

Last updated: 24.04.2017

Note: You can find all recent stats in [our analytics](https://analytics.google.com/analytics/web/#report/visitors-browser/a85994882w128325453p132056054/) (INTERNAL)

## Methodology

We use BEM methodology to create and style our components. 

**Note**: we are using only BEM **naming convention**, but no additional tools or filesystem structure rules.

You can find more details about "official" BEM [here](https://en.bem.info/method/definitions/#what-is-bem).
[This article](https://css-tricks.com/bem-101/) can help you to get grasp on BEM as well.


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

## HowTo

#### Requirements
 - [Ruby](https://www.ruby-lang.org/en/downloads/)
 - [Jekyll](https://jekyllrb.com/docs/installation/)
 - [NodeJS](https://nodejs.org/en/) version 7+
 
#### Have a look at style guide

If you are trying to do it from scratch:

1. Clone repo
2. Run `npm run build`
3. Run `npm start`
4. Open corresponding files in the `docs` directory in your browser (e.g. `http://localhost:8000/dev/docs/basics.html`):
  * `docs/basics.html` for basic components
  * `docs/components.html` for complex components
  * `docs/containers.html` for containers

### Create a new component
1. Create a new folder in `/src/components`
2. Add sass file
  * use the following template
  ```
    // your components variables

    $include-html: false !default;

    @if ($include-html-classes) {
        // your code
    }

  ```
3. Add html fle with example of usage
4. Include in documentation (see readme in `/src/docs` folder)

**Note**: All changes for the styleguide will be rebuilt automatically on every merge/rebase/checkout.


#### See holes in containers

You can hover with mouse over the container in style guide to see the holes (white dashed border around the component):

![Highlighted holes](http://i.gyazo.com/0cc138b81eb12cc518352c2d9c787f0b.png)




## Contribution

If you are a component author you should follow this [guidelines](CONTRIBUTING.md) on top of BEM.

## Layout

Layout is adjusted using 2 breakpoints (`medium-up`, `large-only`) and its mobile first.
- On mobile layout container has 100% width of the page, its single column (main content then aside content)
- From `medium-up` layout has 660px and its centered, its single column (main content then aside content)
- On `large-only` layout has 1024px, 12px padding from the side 660px main column (320px*2 + 20px gap), 20px gap, 320px aside column. On this view columns are placed side by side
