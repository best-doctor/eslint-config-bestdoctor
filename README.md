# BestDoctor ESLint config

[![npm version](https://badge.fury.io/js/%40bestdoctor%2Feslint-config.svg)](https://badge.fury.io/js/%40bestdoctor%2Feslint-config)
[![Build Status](https://travis-ci.org/best-doctor/eslint-config-bestdoctor.svg?branch=master)](https://travis-ci.org/best-doctor/eslint-config-bestdoctor)

This package provides BestDoctor's .eslintrc as an extensible shared config.

## Installation

1. Install the package: `yarn add @bestdoctor/eslint-config -D`.
1. Add `"extends": "@bestdoctor"` to your `.eslintrc`.

## Usage

Run your eslint.

## Motivation

We have variety of projects in BestDoctor and we want to have same code style
in all of them. Besides `eslint` we use `typescript`, `jest`, `react`
and `prettier`. That's why we have some cool plugins in this config:

- `@typescript-eslint/eslint-plugin`
- `eslint-plugin-import`
- `eslint-plugin-jest`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

We also have a
[frontend styleguide](https://github.com/best-doctor/guides/blob/master/guides/frontend_styleguide.md)
(only in russian, sorry).

## Contributing

We would love you to contribute to our project. It's simple:

- Create an issue with bug you found or proposal you have.
  Wait for approve from maintainer.
- Create a pull request. Make sure all checks are green.
- Fix review comments if any.
- Be awesome.

Here are useful tips:

- You can run all checks and tests with `make check`. Please do it
  before TravisCI does.
- We use
  [BestDoctor python styleguide](https://github.com/best-doctor/guides/blob/master/guides/python_styleguide.md).
  Sorry, styleguide is available only in Russian for now.
- We respect [Django CoC](https://www.djangoproject.com/conduct/).
  Make soft, not bullshit.
