module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'eslint-config-prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'react-refresh',
  ],
  rules: {
    ...require('@typescript-eslint/eslint-plugin').recommended.rules,
    ...require('eslint-plugin-react').recommended.rules,
    ...require('eslint-plugin-react-hooks').recommended.rules,
    ...require('eslint-plugin-react-refresh')[0].recommended.rules,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-refresh/only-expected-components': ['warn', { allowConstantCount: true }],
  },
}