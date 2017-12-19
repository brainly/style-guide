![Brainly Style Guide](https://i.imgur.com/mnmDILk.png)

[![Build Status](https://travis-ci.org/brainly/style-guide.svg)](https://travis-ci.org/brainly/style-guide)
[![Dependency Status](https://david-dm.org/brainly/style-guide.svg)](https://david-dm.org/brainly/style-guide)
[![devDependency Status](https://david-dm.org/brainly/style-guide/dev-status.svg)](https://david-dm.org/brainly/style-guide#info=devDependencies)

This project is a living style guide of all basic front-end components used at Brainly.

## Documentation

Documentation is an esential part of this project. You can see its latest version on [styleguide.brainly.com](https://styleguide.brainly.com). New version of the docs is deployed with every merge to master. You can also browse older versions by changing version number in the URL. Documentation is splitted into four sections:
  * Basics - colors, fonts, icons, simple components
  * Components - complex components
  * Containers - components that host other components
  * Interactive - new, interactive version of the style guide docs that we are experimenting with
  
## How to use it

All components can be used in both HTML and JSX. In both cases you have to include main CSS file, as described on the [main docs page](https://styleguide.brainly.com), in the head section of your page. In case of HTML, you just have to follow style-guide markup which you can easily copy by clicking on any component in the docs. If you prefer to use React instead, you'll have to add this repository as a dependency in `package.json` and import components into your JSX file.

## Supported Browsers

We officially support the following browsers (based on real user trafic from our analytics):

| Browser | Versions  | Total share in global traffic |
| ---- | ---- | ---- |
| Google Chrome | 28+ | 60.77% | 
| Safari | 7+ | 12.52% |
| Samsung Internet | 1.1+ | 3.99% |
| YaBrowser | 15+ | 3.99% |
| Android Webview | 30+ | 3.85% |
| Firefox | 42+ | 3.32% |
| UCBrowser | 8+ | 2.90% |
| Android Browser | 4.0+ | 2.11% |
| Opera | 33+ | 2.06% |
| Opera Mini | 7+ | 1.29% |
| Edge | 12+ | 1.28% |
| Internet Explorer | 11+ | 1.05% |

Last updated: 19.12.2017

Note: You can find all recent stats in [our analytics](https://analytics.google.com/analytics/web/#report/visitors-browser/a85994882w128325453p132056054/) (INTERNAL)

## Contributing

We welcome all issue reports and pull requests ❤️ If you'd like to contribute, please start with [this doc](CONTRIBUTING.md).
