![Brainly Style Guide](cover.png)

This project is a living style guide of all basic front-end components used at Brainly.

## Documentation

Documentation is an esential part of this project. You can see its latest version on [styleguide.brainly.com](https://styleguide.brainly.com). New version of the docs is deployed with every merge to master. You can also browse older versions by changing version number in the URL. Documentation is splitted into four sections:

- Basics - colors, fonts, icons, simple components
- Components - complex components
- Containers - components that host other components
- Interactive - interactive version of the style guide docs that we are experimenting with


### Storybook 

Current version of storybook is hosted under following dev URL - [styleguide-dev.brainly.com](https://styleguide-dev.brainly.com)

## How to use it

All components can be used in both HTML and JSX. In both cases you have to include main CSS file, as described on the [main docs page](https://styleguide.brainly.com), in the head section of your page. In case of HTML, you just have to follow style-guide markup which you can easily copy by clicking on any component in the docs. If you prefer to use React instead, you'll have to add this repository as a dependency in `package.json` and import components into your JSX file.

## Supported Browsers

We officially support the following browsers (based on real user trafic from our analytics):

| Browser          | Versions |
| ---------------- | -------- |
| Google Chrome    | 28+      |
| Safari           | 7+       |
| Samsung Internet | 1.1+     |
| YaBrowser        | 15+      |
| Android Webview  | 30+      |
| Firefox          | 42+      |
| UCBrowser        | 8+       |
| Android Browser  | 4.0+     |
| Opera            | 33+      |
| Opera Mini       | 7+       |
| Edge             | 12+      |

Note: You can find all recent stats in [our analytics](https://analytics.google.com/analytics/web/#report/visitors-browser/a85994882w128325453p132056054/) (INTERNAL)

## Contributing

We welcome all issue reports and pull requests ❤️ If you'd like to contribute, please start with [this doc](CONTRIBUTING.md).

## Caveats

- Package "s3" has been forked to @brainly organization. One of dependencies of this package (graceful-fs) was causing our builds to fail. Since this package is no longer maintained, we decided to fork it and make needed updates. As a long-term solution, we need to switch "s3" package to something more up-to-date.

## Codemods

We created a CLI tool that runs codemods with [jscodeshift](https://github.com/facebook/jscodeshift) to batch refactor code.
Usage:

```sh
yarn sg-codemod [...options]
```

where `options` are:

- `--help` - display help
- `--dry` - dry run (no changes are made to files)
- `--glob` - use glob pattern to match files
- `--jscodeshift` - pass options directly to jscodeshift

Read more [here](CODEMODS.md).
