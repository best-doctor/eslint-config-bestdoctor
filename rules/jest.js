module.exports = {
  env: {
    jest: true
  },

  plugins: ["jest"],

  extends: ["plugin:jest/recommended"],

  rules: {
    "jest/consistent-test-it": ["error", { fn: "test" }],
    "jest/expect-expect": "error",
    "jest/lowercase-name": "error",
    "jest/no-alias-methods": "error",
    "jest/no-disabled-tests": "error",
    "jest/no-empty-title": "error",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/no-jasmine-globals": "error",
    "jest/no-jest-import": "error",
    "jest/no-test-callback": "error",
    "jest/no-test-prefixes": "error",
    "jest/no-test-return-statement": "error",
    "jest/no-truthy-falsy": "error",
    "jest/prefer-called-with": "error",
    "jest/prefer-expect-assertions": "error",
    "jest/prefer-strict-equal": "error",
    "jest/prefer-to-be-null": "error",
    "jest/prefer-to-be-undefined": "error",
    "jest/prefer-to-have-length": "error",
    "jest/valid-describe": "error",
    "jest/valid-expect": "error",
    "jest/valid-expect-in-promise": "error"
  }
};
