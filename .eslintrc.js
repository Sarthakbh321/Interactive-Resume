/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2015,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {},
};
