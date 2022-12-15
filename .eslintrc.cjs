module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ["*"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/prop-types": "off", // consider keeping it on
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
  }
}