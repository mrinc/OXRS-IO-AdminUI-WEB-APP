module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/standard",
    "@vue/typescript/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "semi": [2, "always"],
    "quotes": [2, "single"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "comma-dangle": [1],
    "space-before-function-paren": [2, "never"]
  }
}
