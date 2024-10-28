/* eslint-disable import/no-unused-modules */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"next/core-web-vitals",
		"plugin:testing-library/react",
		"plugin:jest-dom/recommended",
		"plugin:storybook/recommended",
		"plugin:react/recommended",
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["import", "testing-library", "jest-dom", "storybook"],
	rules: {
		"react/prop-types": "off",
		"no-extra-boolean-cast": "off",
		"no-unused-vars": "warn",
		"no-duplicate-imports": ["error", { includeExports: true }],
		"no-undef": "warn",
		"no-use-before-define": "error",
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"no-var": "error",
		"import/no-unused-modules": [
			2,
			{ unusedExports: false, missingExports: true },
		],
	},
};
