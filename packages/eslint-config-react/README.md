<div align="center">

# eslint-config-react

[![javascript style guide][standard-westudents-badge]][standard-westudents]
[![NPM version][npmjs-badge]][npmjs-com]

</div>

This package provides Westudents ReactJS .eslintrc as an extensible shared config.

## Getting Started

### Install

The package requires `eslint` and some other dependencies to work, which you can list via:

```sh
npm info "@westudents/eslint-config-react@latest" peerDependencies
```

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps --dev @westudents/eslint-config-react
```

If using **npm < 5**, Linux/OSX users can run

```sh
(
export PKG=eslint-config-airbnb-base;
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-airbnb-base
```

## Usage

Add `"extends": "@westudents/eslint-config-react"` to your .eslintrc as follows

```json
{
    "extends": "@westudents/eslint-config-react"
}
```

## Badge

Feel free to add this badge to your README file.

[![javascript style guide][standard-westudents-badge]][standard-westudents]

```markdown
[![javascript style guide](https://img.shields.io/badge/code_style-standard--westudents-orange.svg)](https://github.com/westudents/eslint-config-node)
```

[npmjs-badge]: https://img.shields.io/npm/v/@westudents/eslint-config-react.svg?logo=npm
[npmjs-com]: https://www.npmjs.com/package/@westudents/eslint-config-react
[standard-westudents-badge]: https://img.shields.io/badge/code_style-westudents-orange.svg
[standard-westudents]: https://github.com/we-students/eslint-config-react
