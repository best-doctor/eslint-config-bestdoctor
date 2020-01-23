module.exports = {
  plugins: ['react'],

  extends: ['plugin:react/recommended'],

  rules: {
    'react/boolean-prop-naming': 'error',
    'react/display-name': 'off', // ругается на замыкание
    'react/no-direct-mutation-state': 'error',
    'react/no-unsafe': 'error',
    'react/prop-types': 'off', // typescript вместо prop-types
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }], // У нас .tsx
    // "react/jsx-handler-names": "error", добавить позже
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-key': 'error',
    'react/jsx-wrap-multilines': 'off', // prettier сам справляется
    // "react/jsx-sort-prop": "error", добавить позже
  },

  settings: {
    // https://github.com/yannickcr/eslint-plugin-react#configuration
    react: {
      version: 'detect',
    },
  },
}
