/**
 * These rules enforce the AirBnb Style Guide
 * Refer to it at https://github.com/airbnb/javascript
 *
 */

module.exports = {
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.object.name=\'console\'][callee.property.name!=/^(log|warn|error|info|trace)$/]',
        message: 'Unexpected property on console object was called',
      },
    ],
  },
  extends: 'airbnb',
};
