module.exports = {
  plugins: ['import'],

  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],

  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/*.stories.tsx',
          '**/fixtures.ts',
          '**/setupTests.ts',
          '**/jest-setup.ts',
          '**/jest-setup.tsx',
          './*.ts',
          './*.js',
        ],
      },
    ],
  },
}
