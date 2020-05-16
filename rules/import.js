module.exports = {
  plugins: ['import'],

  extends: ['plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],

  rules: {
    'import/default': 'error',
    'import/extensions': 'off',
    'import/group-exports': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.tsx', '**/*.spec.tsx'] }, // Разрешаем импорт devDependencies из тестов
    ],
    'import/no-unassigned-import': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'error',
  },
}
