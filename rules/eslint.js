module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },

  extends: ['eslint:recommended'],

  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-prototype-builtins': 'off',
    'no-plusplus': 'off',
  },
}
