const path = require("path");

const rulesPath = path.join(__dirname, "rules");

const configPaths = [
  "eslint.js",
  "import.js",
  "jest.js",
  "jsx-a11y.js",
  "react.js",
  "@typescript-eslint.js",
  "prettier.js",
  "react-hooks.js"
].map(name => path.join(rulesPath, name));

const configs = configPaths.map(require);

const configRules = configs.map(config => config.rules);
const configSettings = configs.map(config => config.settings);

const settings = Object.assign({}, ...configSettings);
const rules = Object.assign({}, ...configRules);

const [
  eslintPath,
  importPath,
  jestPath,
  jsxPath,
  reactPath,
  typescriptPath,
  prettierPath,
  reactHooksPath
] = configPaths;

module.exports = {
  extends: [
    eslintPath,
    importPath,
    jestPath,
    jsxPath,
    reactPath,
    reactHooksPath,
    "airbnb",
    typescriptPath,
    prettierPath
  ],

  rules,

  globals: {
    __DEV__: true // DEV environment
  },

  settings
};
