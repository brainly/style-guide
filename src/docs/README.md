# Style Guide Docs

Docs are build using [Jekyll](http://jekyllrb.com/).

## Development setup

During development you want to have `script/server.sh` running in one console and `script/watch.sh` in the other. Watch script
will call Jekyll build whenever you change any scss, html or yml file in docs folder (`src/docs`). Server script will serve
the result, so that you can see it in your browser.

## Adding components to the docs

- In the component folder (`src/components/YOUR_COMPONENT_NAME`) create an HTML file demonstrating usage of your component
(see other components for reference).
- Include path to that file in the configuration (`src/docs/_data/navigation.yml`).
- Rebuild the docs (or let the watch script to do that).
