module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  ignorePatterns: ['__mocks__/', 'node_modules/', 'setupTests.ts'],
  rules: {
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    '@typescript-eslint/no-unused-vars': [1, { args: 'none' }],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'max-len': ['warn', { code: 200, ignoreUrls: true }],
    'no-confusing-arrow': ['warn', { allowParens: false }],
    'no-mixed-operators': 'warn',
    'no-tabs': ['warn', { allowIndentationTabs: true }],
    'no-unexpected-multiline': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
