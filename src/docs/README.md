# Style Guide Docs

## Development setup

During development you want to have `npm run watch` running in a console. This script
will call build whenever you change any scss, html or jsx file in docs folder (`src/docs`). It will also serve
the result, so that you can see it in your browser.

## Adding components to the docs

- In the component folder (`src/components/YOUR_COMPONENT_NAME`) create a .jsx file demonstrating usage of your component
(see other components for reference).
- Include that component in the configuration (`src/docs/navigation.js`).
- Rebuild the docs (or let the watch script to do that).
