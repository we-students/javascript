<div align="center">

# eslint-config-react-native

[![javascript style guide][standard-westudents-badge]][standard-westudents]
[![NPM version][npmjs-badge]][npmjs-com]

</div>

This package provides Westudents React Native .eslintrc as an extensible shared config.

## Getting Started

### Install

The package requires `eslint` and some other dependencies to work, which you can list via:

```sh
npm info "@westudents/eslint-config-react-native@latest" peerDependencies
```

Install the peer dependencies:

```sh
npm i --save-dev @react-native-community/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier prettier
```

Then install the eslint config

```sh
npm i @westudents/eslint-config-react-native
```

If using **npm 5+**, use this shortcut:

```sh
npx install-peerdeps --dev @westudents/eslint-config-react-native
```

## Usage

Add `@westudents/eslint-config-react-native` to your .eslintrc as follows

```js
module.exports = {
    ...,
    extends: '@westudents/eslint-config-react-native'
}
```

You can add this scripts to your `package.json`:

```json
{
    ...,
    "scripts": {
        ...,
        "lint": "eslint .",
        "lint:fix": "eslint --fix"
    }
}
```

## Badge

Feel free to add this badge to your README file.

[![javascript style guide][standard-westudents-badge]][standard-westudents]

```markdown
[![javascript style guide](https://img.shields.io/badge/code_style-standard--westudents-orange.svg)](https://github.com/westudents/eslint-config-node)
```

[npmjs-badge]: https://img.shields.io/npm/v/@westudents/eslint-config-react-native.svg?logo=npm
[npmjs-com]: https://www.npmjs.com/package/@westudents/eslint-config-react-native
[standard-westudents-badge]: https://img.shields.io/badge/code_style-westudents-orange.svg
[standard-westudents]: https://github.com/we-students/eslint-config-react-native