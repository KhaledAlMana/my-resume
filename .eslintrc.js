module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  globals: {
    $nuxt: true,
  },
};
