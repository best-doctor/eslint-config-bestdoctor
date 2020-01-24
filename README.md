# BestDoctor ESLint config

[![npm version](https://badge.fury.io/js/%40bestdoctor%2Feslint-config.svg)](https://badge.fury.io/js/%40bestdoctor%2Feslint-config)

This package provides BestDoctor's .eslintrc as an extensible shared config.

## Usage

1. Install the package

```sh
yarn add @bestdoctor/eslint-config -d
```

2. Add `"extends": "@bestdoctor"` to your `.eslintrc`

## Motivation

We have variety of projects in BestDoctor and we want to have same code style in all of them. Besides `eslint` we use `typescript`, `jest`, `react` and `prettier`. That's why we have some cool plugins in this config:

- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-import`
- `eslint-plugin-jest`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

We also have a [frontend styleguide](https://github.com/best-doctor/guides/blob/master/guides/frontend_styleguide.md) (only in russian, sorry).
