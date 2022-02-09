# Codemods

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

### `--glob` option

Use this flag to pass file path or directory through glob.

```sh
npx react-codemod --glob
```

You will be asked to type in path string in the <b>next step</b>. If you choose `--glob` flag, that string (file path) will be interpreted with [glob](https://github.com/isaacs/node-glob). Remember to include desired file extension(s) within the glob pattern, because all matching files will be passed to jscodeshift.

### `--jscodeshift` option

To pass more options directly to jscodeshift, use `--jscodeshift="..."`. For example:

```sh
npx react-codemod --jscodeshift="--verbose=2"
```

See all available options [here](https://github.com/facebook/jscodeshift#usage-cli).

## Included Transforms:

#### `replace-colors-rebranding`

Replaces `color` prop on a component to match new color tokens and/or refactored component API.
