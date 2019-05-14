# Contributing to the project

Hi 👋 Thanks for considering contributing! Aim of this doc it to guide you throught the process and help you better understand the project.

## Process

1. Run this project locally (described below)
1. Make your changes (including tests and documentation updates)
1. Make sure all tests and linters are happy with your changes
1. Open a PR
1. Get your PR accepted by two of the [maintainers](https://github.com/brainly/style-guide/blob/master/MAINTAINERS)
1. Bump project version (described below)
1. Your chagne will be automatically deployed and available at [styleguide.brainly.com](https://styleguide.brainly.com) within couple of minutes

## How to run this project locally

#### Requirements

 - [NodeJS](https://nodejs.org/en/) version 8+
 - [Yarn](https://yarnpkg.com)
 
#### Step by step guide

1. Clone this repository
2. Run `yarn install`
3. Run `yarn build`
4. Run `yarn start`
5. You should be able to access docs in your browser by navigating to [`localhost:8000/dev/docs/`](http://localhost:8000/dev/docs/).

## Docs

Remember that docs are essential part of this project. Don't forget to update them whenever you change, add or delete any components. Docs for each component are located in the `components/COMPONENT_NAME/pages/` folder. Main page and page templates are located in `docs/pages`.

## SCSS

We use BEM naming convetion.

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

## React

Each component/container should have its own file.
Components are dumb and should be written in pure function form. 
Each file should export default module like so:
```
export default ComponentName;
```

#### File Location

Component and container files should be located next to `.scss` files in `src/components` directory. 
Documentation pages for components should be located in same directory in subdirectory called `pages`.

#### Tests

Each component should be tested. We are using [jest](https://facebook.github.io/jest/) as a test runner/framework.
Test files should be located next to component/container file with extension `.spec.js`

#### Importing dependencies

When importing dependencies we are using global imports instead of relative ones.

Bad:
```
import ButtonPrimary, {types as buttonTypes} from '../../buttons/ButtonPrimary';
```

Good:
```
import ButtonPrimary, {BUTTON_PRIMARY_TYPE} from 'components/buttons/ButtonPrimary';
```

#### Components options

Component options should be stored in const object.
Options should have singular form ("alignment" not "alignments") and capitalized names like:

```
const ALIGNMENT = {START: 'start', END: 'end'};
```

Each component should export its configuration options (if it have some).
```
export {DIRECTION, ALIGNMENT};
```

#### Layout and helpers documentation
Go here to find documentation about [FlEXBOX component](src/components/flex/FLEXBOX.md) and documentation regarding [SASS MIXINS](src/sass/README.md)

## Technical Discipline

#### Bumping Release Version

This project uses semver versioning.

To simplify version bumping you can use [`yarn version`](https://yarnpkg.com/lang/en/docs/cli/version/). It will patch `package.json`, create a corresponding commit, create a tag and push those to git changes.

To bump the version correctly you should follow these steps:

1. Wait for your PR to get accepted

1. Rebase your branch

1. bump version in branch 

1. Merge your PR to master

#### Code Style

All linter settings are based on our standarized [frontend tools configs](https://github.com/brainly/frontend-tools-configs/).
To run the linters (and tests) you should use: `yarn test`.
