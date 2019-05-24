module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ["react", "import", "@typescript-eslint", "jest"],

  extends: [
    "eslint:recommended",
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],

  env: {
    browser: true,
    node: true,
    jest: true
  },

  settings: {
    // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    },
    // https://github.com/yannickcr/eslint-plugin-react#configuration
    react: {
      version: "detect"
    }
  },

  rules: {
    "react/prop-types": "off", // typescript вместо prop-types
    "import/prefer-default-export": "warn",
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.tsx", "**/*.spec.tsx"] } // Разрешаем импорт devDependencies из тестов
    ],
    "react/display-name": "warn",
    "no-unused-vars": "error"
  },

  globals: {
    __DEV__: true // DEV environment
  }
};
