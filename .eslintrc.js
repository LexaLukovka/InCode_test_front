module.exports = {
  'extends': 'eslint-config-airbnb',
  'rules': {
    'no-trailing-spaces': 0,
    'max-len': [2, 120],
    'linebreak-style': 0,
    'no-extra-semi': 2,
    'arrow-parens': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'semi': [2, 'never'],
    'no-plusplus': 0,
    // disable rules from base configurations
    'jsx-a11y/tabindex-no-positive': 'off',
    'react/jsx-wrap-multilines': 0,
    'react/jsx-curly-spacing': [2, { 'when': 'never', 'allowMultiline': false }],
    // 'jsx-a11y/anchor-is-valid': [ 'error', {
    //   'components': [ 'Link' ],
    //   'specialLink': [ 'to', 'hrefLeft', 'hrefRight' ],
    //   'aspects': [ 'noHref', 'invalidHref', 'preferButton' ]
    // } ],
    'jsx-a11y/anchor-is-valid': 0,
    'react/no-array-index-key': 0,

  },
  'settings': {
    'import/resolver': {
      'babel-module': {}
    }
  },
  'env': {
    'jasmine': true,
    'jest': true,
    'browser': true,
    'node': true
  }
}
