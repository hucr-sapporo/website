module.exports = {
  root: true,
  env: {
    browser: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint' // allow lint for non-standard syntax
  }
}
