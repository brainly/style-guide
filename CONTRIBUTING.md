# Contributing to the Project

Hi 👋 Thanks for considering contributing! The aim of this doc is to guide you throughout the process of contributing to and help you better understand the Style Guide project.

## Process

1. Run this project locally (described below)
1. Make your changes (including tests and documentation updates)
1. Make sure all tests and linters are happy with your changes
1. Open a PR
1. Get your PR accepted by two of the [maintainers](https://github.com/brainly/style-guide/blob/master/MAINTAINERS)

## How to Run This Project Locally

### Requirements

- [NodeJS](https://nodejs.org/en/) version >= 10.13.0
- [Yarn](https://yarnpkg.com) >= 1.3.2

### Step by Step Guide

1. Clone this repository.
2. Run `yarn install`.
3. Run `yarn build`.
4. Run `yarn storybook`.
5. You should be able to access the docs in your browser by navigating to [`localhost:6006`](http://localhost:6006).

## Docs

Remember that docs are an essential part of this project. Don't forget to update them whenever you change, add, or delete any components. Docs for each component are written in `components/COMPONENT_NAME/*.stories.mdx|jsx` files.

## SCSS

We use the BEM naming convetion.

### Modifier Dictionary

We have a standardized set of words you should use when adding modifiers to blocks.

- If your component changes only in one dimension:

  - width: `xnarrow` `narrow` `wide` `xwide` `full-width`
  - height: `xshort` `short` `tall` `xtall` `full-height`

- If it changes in both dimensions: `xsmall` `small` `large` `xlarge`

- Behavior changes:

  - `non-responsive`
  - `obscured` vs `standout`
  - `disabled`
  - `active` vs `inactive`

- Combinations of behaviors:
  - `padding-wide`
  - `padding-tall`
  - `padding-large`

All components are **responsive** by default, so there is no need for modifiers specific to responsiveness (exception: `non-responsive`).

## React

Each component/container should have its own file.
Components are dumb and should be written in pure function form.
Each file should export the default module like so:

```
export default ComponentName;
```

### File Location

Component and container files should be located next to `.scss` files in `src/components` directory.
Documentation pages for components should be located in same directory with name `{component-name}.stories.mdx`.

### Tests

Each component should be tested. We are using [jest](https://facebook.github.io/jest/) as a test runner/framework.
Test files should be located next to component/container file with extension `.spec.js`

### Storybook & Chromatic

There is also Chromatic visual regression tool which uses storybook stories to run tests. It is integrated with Github and being run on pull requests.

If you already have storybook stories, you can use them also for Chromatic. Run script:

```bash
$ node ./scripts/generate-chromatic-stories.js /path-to-your-storybook-file
```

It will generate script for Chromatic. That script just use existing component storybook stories, but you can modify it to omit or add some extra stories. Run storybook locally to check stories seen by Chromatic:

```bash
$ yarn storybook-chromatic
```

Then commit file and check Github PR to see Chromatic check status.

You can find more details how to work with Chromatic [Confluence(INTERNAL)](https://brainly.atlassian.net/wiki/spaces/DesignSystem/pages/939786571/Chromatic+in+the+Style+Guide)

### Importing Dependencies

When importing dependencies, we are using global imports instead of relative ones.

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

<Button type="solid">Button</Button>
```

#### Components options

Component options should be stored in a `const` object.
Options should have singular form ("alignment" not "alignments") and capitalized names like:

```
const ALIGNMENT = {START: 'start', END: 'end'};
```

Each component should export its configuration options (if it have some).

```
export {DIRECTION, ALIGNMENT};
```

### Layout and Helpers Documentation

Go to these links to find documentation about [the Flexbox component](src/components/flex/README.md) and documentation regarding [SASS mixins](src/sass/README.md).

### Adding icons process

1. Your svg file has to be exported with a `viewBox="0 0 512 512"`.
2. Clean up the file: keep only `xmlns` and `viewBox` attributes on `svg` tag and remove the rest (eventually you can use `data-fixedcolors` attribute on `svg` icon which has to have fixed colors for some reason). There is no need to optimize a `<path>` since it will be optimized during build process with [svgo](https://www.npmjs.com/package/svgo).
3. Remove the title.

Now, your file should look like:

```
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path ... />
  </svg>
```

4. Add svg file to `src/images/icons` (in case of a basic icon), or relevant folder from `src/images` directory. Use `snake_case` as a naming convention.
5. Define a new icon type in [Icon.jsx](src/components/icons/Icon.jsx). Add icon to a particular icon group in [get-icon-group.js](src/components/icons/get-icon-group.js)
6. Run `yarn build` to re-generate icons.
7. Run `yarn storybook` and go to icons section at [http://localhost:6006/?path=/story/foundation-%E2%9C%A8-icons--page](http://localhost:6006/?path=/story/foundation-%E2%9C%A8-icons--page) and find your newly added icon.
8. Follow standard process of introducing changes to the style-guide.
9. After releasing your changes, to use a new icon in your project you need to update the `src` of the icons in `<script>` you include on your page. This `src` is avaialble on the main page of docs (`https://styleguide.brainly.com`).

example:

```
<script src="https://styleguide.brainly.com/images/icons-0c5f18cafc.js"></script>
```

### Adding logotypes

1. Add new logo svg file to `src/images/logos`
2. Update typings with new logo type using filename(without extension)
3. Use new logo type as prop `type` in `Logo` component

## Technical Discipline

#### Bumping the Release Version - this part is for [maintainers](https://github.com/brainly/style-guide/blob/master/MAINTAINERS)

This project uses semver versioning. We follow [SemVer](https://semver.org/):

1. Bump first number - If your release breaks public API in any way - e.g. removed method, renamed class, different default parameters for method, new required parameters, removing components.
2. Bump second number - If your release only extends public API and improves support, add new components, improves CSS.
3. Bump the last number - Finally, if your release only fixes a bug w/o any API changes or introducing new features bump the last number.

To simplify version bumping you can use [`yarn version`](https://yarnpkg.com/lang/en/docs/cli/version/). It will patch `package.json`, create a corresponding commit, create a tag, and push those to git changes.

To bump the version correctly you should follow these steps:

1. Merge approved, pending PR's into master.
2. Create a branch with a bumped version according to the rules above, create tag and merge it (get approvals of course).
3. Create proper, specific and detailed release note, with all the changes included in the release.
4. Publish your newly prepared version of style-guide to NPM registry with `npm publish` command (do it from a fresh master branch containing commits with your changes and bumped version).
5. Remember to let know contributors (before merge their PR, just mention in the comment that we are releasing a new version of the library) and Brainly engineers (slack channel would be a perfect place for that), that new version was released and it's ready to use.

#### Release Notes Template

Release notes title format contains tag and date: `[TAG] (Date)`. For example `v198.3.0 (4 Nov 2021)`

Following headlines should be used in release notes:

- Breaking Changes
- Features
- Bug Fixes
- Maintenance
- Dependency Updates
- Documentation

#### Troubleshooting

- `npm publish` throws `PUT https://registry.npmjs.org/brainly-style-guide - Not found` - run `npm login` and try again

#### Code Style

All linter settings are based on our standarized [frontend tools configs](https://github.com/brainly/frontend-tools-configs/).
To run the linters (and tests) you should use `yarn test`.
