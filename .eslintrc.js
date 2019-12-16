module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'airbnb',
    'prettier',
  ],
  plugins: ['prettier', 'react', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    confirm: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    semi: 2,
    indent: [2, 2],
    quotes: [2, 'single'],
    'import/prefer-default-export': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/prop-types': 2,
    'react/jsx-max-props-per-line': 2,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'prettier/prettier': ['error'],
  },
};
