# Contributing to the project

Hi 👋 Thanks for considering contributing! Aim of this doc it to guide you throught the process and help you better understand the project.

## Process

1. Run this project locally (described below)
1. Make your changes (including tests and documentation updates)
1. Make sure all tests and linters are happy with your changes
1. Open a PR
1. Get your PR accepted by two of the [maintainers](https://github.com/brainly/style-guide/blob/master/MAINTAINERS)


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
import Button, {types as buttonTypes} from '../../buttons/Button';
```

Good:
```
import Button, {BUTTON_TYPE} from 'components/buttons/Button';
```

or just:

```
import Button from 'components/buttons/Button';

<Button type="primary">Button</Button>
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
Go here to find documentation about [FlEXBOX component](src/components/flex/README.md) and documentation regarding [SASS MIXINS](src/sass/README.md)

## Technical Discipline

#### Bumping Release Version - this part is for [maintainers](https://github.com/brainly/style-guide/blob/master/MAINTAINERS)

This project uses semver versioning. We follow [SemVer](https://semver.org/):

1. Bump first number - If your release breaks public API in any way - e.g. removed method, renamed class, different default parameters for method, new required parameters, removing components.
2. Bump second number - If your release only extends public API and improves support, add new components, improves CSS. 
3. Bump the last number - Finally, if your release only fixes a bug w/o any API changes or introducing new features bump the last number.

To simplify version bumping you can use [`yarn version`](https://yarnpkg.com/lang/en/docs/cli/version/). It will patch `package.json`, create a corresponding commit, create a tag and push those to git changes.

To bump the version correctly you should follow these steps:

1. Merge approved, pending PR's into master.
2. Create a branch with a bumped version according to the rules above, create tag and merge it (get approvals of course).
3. Create proper, specific and detailed release note, with all the changes included in the release
4. Remember to let know contributors and Brainly engineers, that new version was released and it's ready to use

#### Code Style

All linter settings are based on our standarized [frontend tools configs](https://github.com/brainly/frontend-tools-configs/).
To run the linters (and tests) you should use: `yarn test`.
