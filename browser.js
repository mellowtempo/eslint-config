'use strict';

const path = require('path');

module.exports = {
    extends: path.join(__dirname, 'index.js'),
	env: {
		browser: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: false,
		codeFrame: true
	}
};
