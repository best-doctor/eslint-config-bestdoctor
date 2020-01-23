module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['@typescript-eslint'],

  extends: ['plugin:@typescript-eslint/recommended'],

  rules: {
    '@typescript-eslint/ban-ts-ignore': 'warn', // Иногда без ts-ignore не обойтись, но пусть их подсвечивает eslint
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/func-call-spacing': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },

  settings: {
    // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
}
