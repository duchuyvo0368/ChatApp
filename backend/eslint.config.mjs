import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2018,
      globals: globals.browser,
    },
    rules: {
      indent: ["error"],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "array-bracket-spacing": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "space-in-parens": ["error", "always"],
    },
    globals: {
      process: true,
    },
  },
  {
    files: ["**/*.js"],
    env: {
      node: true,
      es6: true,
    },
    extends: ["eslint:recommended", "plugin:node/recommended"],
    rules: {
      // Additional rules specific to Node.js can be added here
    },
  },
  pluginJs.configs.recommended,
];
