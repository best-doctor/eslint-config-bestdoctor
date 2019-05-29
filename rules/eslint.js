module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },

  extends: ["eslint:recommended", "airbnb"],

  rules: {
    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "array-element-newline": ["error", "consistent"],
    "block-spacing": ["error", "always"],
    // "complexity": ["error", 7] // Добавит цикломатическую сложность добавить позже
    "func-call-spacing": "off", // Есть @typescript-eslint/func-call-spacing
    "init-declarations": ["error", "always"],
    "no-confusing-arrow": "error",
    "no-duplicate-imports": "error",
    "no-empty-function": ["error", { allow: ["arrowFunctions"] }],
    "no-eq-null": "error",
    // WAIT to @typescript-eslint/eslint-plugin version 1.9.1
    // "no-extra-parens": "off", // потому что есть @typescript-eslint/no-extra-parens
    "no-floating-decimal": "error",
    "no-implicit-coercion": [
      "error",
      { boolean: true, number: true, string: true, allow: ["!!"] }
    ],
    "no-multi-spaces": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-vars": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-constructor": "off", // потому что есть @typescript-eslint/no-useless-constructor
    "no-warning-comments": [
      "warn",
      { terms: ["todo", "fixme"], location: "anywhere" }
    ],
    "prefer-arrow-callback": "error",
    "require-await": "error",
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": ["error", "never"]
  }
};
