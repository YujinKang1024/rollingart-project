module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "import",
    "react-native",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
    "no-unused-vars": "error",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    eqeqeq: ["error", "always"],
    "array-callback-return": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": "off",
    "react/style-prop-object": "off",
    "react-native/no-color-literals": "off",
    "react-native/sort-styles": "off",
    "func-names": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
