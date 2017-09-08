module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "env": {
    "node": true
  },
  "plugins": [
    "html",
    "promise"
  ],
  "extends": [
    'airbnb-base/legacy',
    "plugin:promise/recommended"
  ],
  "rules": {
    // overide eslint rule
    'camelcase': 0,
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'eqeqeq': 0,
    'func-names': 0,
    'global-require': 0,
    'linebreak-style': 0,
    //'linebreak-style': [2, process.platform === 'win32' ? 'windows' : 'unix'],
    'max-len': 0,
    'new-cap': 2,
    'no-new': 0,
    'no-bitwise': 0,
    'no-console': 0,
    'no-continue': 0,
    'no-else-return': 0,
    'no-lonely-if': 0,
    'no-multi-assign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-undef-init': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 0,
    'operator-assignment': 0,
    'padded-blocks': 0,
    'quote-props': 0,
    'quotes': 0,
    'spaced-comment': 0,
    'space-before-function-paren': [2, {
      'anonymous': 'always',
      'named': 'ignore',
      'asyncArrow': 'always'
    }],
    'vars-on-top': 0,
    'no-param-reassign': 0
  },
  globals: {
    Promise: true
  }
};
