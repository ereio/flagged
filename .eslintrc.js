module.exports = {
  env: {
    "browser": true,
    "es6": true
  },
  extends: [
    '@react-native-community',
    "plugin:react/recommended",
    "airbnb"
  ],
  globals: {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    // eslints
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'arrow-parens': ['error', 'always'],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'max-len': ['error', { 'code': 120, 'tabWidth': 2, 'ignoreUrls': true, 'ignoreStrings': true, 'ignoreTrailingComments': true }],
    'comma-dangle': ['error', 'only-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-newline': ['error', { 'multiline': true, 'consistent': true, 'minProperties': 4 }],
    'function-paren-newline': ['error', 'consistent'],
    'computed-property-spacing': ['error', 'never'],
    'no-underscore-dangle': ['error', { 'allow': ['__typename'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'arrow-body-style': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'array-callback-return': ['off'],
    'consistent-return': ['off'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': ['error'],
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
    'react/prop-types': ['off'],
    'class-methods-use-this': ['off'],
    'no-use-before-define': ['off'],
  },
};
