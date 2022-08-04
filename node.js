'use strict';

const path = require('path');

module.exports = {
    extends: path.join(__dirname, 'index.js'),
    plugins: ['node'],
    env: {
        node: true
    },
    rules: {
        // errors
        'no-console': 'off',

        // ecmascript6
        'arrow-body-style': 'off',
        'arrow-parens': 'off',

        // node plugins
        'node/callback-return': ['error', ['callback', 'cb', 'next']],
        'node/global-require': 'off',
        'node/handle-callback-err': ['warn', 'error'],
        'node/no-mixed-requires': 'error',
	    'node/no-new-require': 'error',
	    'node/no-path-concat': 'warn',
	    'node/no-process-env': 'off',
	    'node/no-process-exit': 'off',
        'node/no-restricted-require': 'off',
        'node/no-restricted-import': 'off',
        'node/no-sync': 'off',
        'node/no-extraneous-import': 'warn',
        'node/no-extraneous-require': 'warn',
        'node/no-missing-import': 'warn',
        'node/no-missing-require': 'warn',
        'node/no-unpublished-bin': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-unpublished-require': 'off',
        'node/no-unsupported-features/es-builtins': ['error', { 'version': '>=10.0.0' }],
        'node/no-unsupported-features/es-syntax': ['error', { 'version': '>=10.0.0' }],
        'node/no-unsupported-features/node-builtins': ['error', { 'version': '>=10.0.0' }],
        'node/process-exit-as-throw': 'error',
        'node/shebang': 'error',
        'node/no-deprecated-api': 'error',
        'node/exports-style': ['error', 'module.exports'],
        'node/prefer-global/buffer': ['error', 'always'],
        'node/prefer-global/console': ['error', 'always'],
        'node/prefer-global/process': ['error', 'always']
    }
};
