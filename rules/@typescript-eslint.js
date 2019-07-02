module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
  },

  plugins: ["@typescript-eslint"],

  extends: ["plugin:@typescript-eslint/recommended"],

  rules: {
    "@typescript-eslint/ban-ts-ignore": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    // typescript сам резолвит большую часть типов, а там где мы считаем сами нужным указать тип, все еще можно указывать
    "@typescript-eslint/func-call-spacing": ["error"],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
          requireLast: true
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    // "@typescript-eslint/no-extra-parens": ["error"], WAIT to @typescript-eslint/eslint-plugin version 1.9.1
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    // "@typescript-eslint/no-type-alias": "error", добавить позже
    // "@typescript-eslint/no-unnecessary-qualifier": "error", // не работает, нужен ресерч
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "error",
    // "@typescript-eslint/prefer-includes": "error", // не работает, нужен ресерч
    // "@typescript-eslint/prefer-regexp-exec": "error", // не работает, нужен ресерч
    // "@typescript-eslint/prefer-string-starts-ends-with": "error", // не работает, нужен ресерч
    // "@typescript-eslint/require-array-sort-compare": "error", // не работает, нужен ресерч
    // "@typescript-eslint/restrict-plus-operands": "error", // не работает, нужен ресерч
    "@typescript-eslint/type-annotation-spacing": "error",
    // "@typescript-eslint/unbound-method": "error", // не работает, нужен ресерч
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/explicit-function-return-type": "off"
  },

  settings: {
    // https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {}
    }
  }
};
