module.exports = {
  extends: ['@teambit/eslint-config-bit-react'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    "prefer-object-spread": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"]
  }
}
