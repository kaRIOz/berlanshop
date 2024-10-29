/* eslint-disable import/no-unused-modules */
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "next/core-web-vitals",
        "next/typescript",
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
    plugins: ["boundaries", "import", "testing-library", "jest-dom", "storybook"],
    settings: {
        "boundaries/include": ["src/**/*"],
        "boundaries/elements": [
            {
                mode: "full",
                type: "shared",
                pattern: [
                    "src/components/**/*",
                    "src/data/**/*",
                    "src/drizzle/**/*",
                    "src/hooks/**/*",
                    "src/lib/**/*",
                    "src/server/**/*",
                    "src/config/**/*",
                    "src/core/**/*",
                    "src/utils/**/*",
                    "src/providers/**/*",
                    "src/fonts/**/*",
                ],
            },
            {
                mode: "full",
                type: "feature",
                capture: ["featureName"],
                pattern: ["src/features/*/**/*"],
            },
            {
                mode: "full",
                type: "app",
                capture: ["_", "fileName"],
                pattern: ["src/app/**/*"],
            },
            {
                mode: "full",
                type: "neverImport",
                pattern: ["src/*", "src/tasks/**/*"],
            },
        ],
    },
    rules: {
        "react/prop-types": "off",
        "no-extra-boolean-cast": "off",
        "no-unused-vars": "warn",
        "no-duplicate-imports": ["error", { includeExports: true }],
        "no-undef": "warn",
        "no-use-before-define": "error",
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-var": "error",

        "boundaries/no-unknown": ["error"],
        "boundaries/no-unknown-files": ["error"],
        "boundaries/element-types": [
            "error",
            {
                default: "disallow",
                rules: [
                    {
                        from: ["shared"],
                        allow: ["shared"],
                    },
                    {
                        from: ["feature"],
                        allow: ["shared", ["feature", { featureName: "${from.featureName}" }]],
                    },
                    {
                        from: ["app", "neverImport"],
                        allow: ["shared", "feature"],
                    },
                    {
                        from: ["app"],
                        allow: [["app", { fileName: "*.css" }]],
                    },
                ],
            },
        ],
    },
};
