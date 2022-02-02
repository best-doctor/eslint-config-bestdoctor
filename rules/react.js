module.exports = {
  plugins: ['react'],

  rules: {
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'error',
    'react/no-unused-prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-no-bind': ['off', { allowFunctions: true }],
  },

  settings: {
    // https://github.com/yannickcr/eslint-plugin-react#configuration
    react: {
      version: 'detect',
    },
  },
}
