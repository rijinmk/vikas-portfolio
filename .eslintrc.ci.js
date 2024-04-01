module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-single'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-console': 'off'
  }
}