# Brainly Style Guide

This is frontend style guide used across all projects in Brainly.
Provides unified styles for all components and contains guidelines about development of new ones.

Table of contents:
* [Methodology](#methodology)
* [Usage](#usage)
* [Contribution](#contribution)

## Methodology

In terms of naming conventions amd terminology we're using Block, Element, Modifier, BEM in short.
The basic idea is to have small, maintainable components, that would be easy to change and update.

#### BEM Components

* **Block** is an independent entity, a block or component of an application. A block can be either simple or compound (containing other blocks).
* **Element** is a part of a block that performs a certain function. Elements only make sense in the context of the block that they belong to.
* **Modifier** is used when we want to add a particular attribute that will change our block or element.

You can find more details about BEM [here](https://en.bem.info/method/definitions/#what-is-bem).


## Usage

Below you can see example of few components, whole style guide will be hosted soon.

**Secondary button with icon**
```
<button class="button-secondary button-secondary--with-heart-icon">
    <span class="button-secondary__text">Thank you</span>
    <span class="button-secondary__counter">34</span>
</button>
```

**Tabs**
```
<ul class="tabs">
    <li class="tabs__tab">text 1</li>
    <li class="tabs__tab">text 2</li>
    <li class="tabs__tab">text 3</li>
    <li class="tabs__tab tabs__tab--active">text 4</li>
</ul>
```

## Contribution

To contribute, please read [Contributing file](CONTRIBUTING.md)

## TODO
1. **Synopsis for this repo**
1. Build of assets on checkout - remove them from repo
1. Docker file for building icon font (requires quite a few things that are not necessary to have on your machine)
1. Some documentation about style-guide (BEM - naming convention)
1. Communicate with mobile team so they can use icons from this project
1. Add note about supported browser
1. Host on s3 (auto-update on commit) for easy preview
