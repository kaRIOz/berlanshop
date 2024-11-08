/* eslint-disable import/no-unused-modules */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:drizzle/all",
        "eslint:recommended",
        "next/core-web-vitals",
        "next/typescript",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
        "plugin:storybook/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["drizzle", "@typescript-eslint", "boundaries", "import", "testing-library", "jest-dom", "storybook"],
    // settings: {
    //     "boundaries/include": ["src/**/*"],
    //     "boundaries/elements": [
    //         {
    //             mode: "full",
    //             type: "shared",
    //             pattern: [
    //                 "src/components/**/*",
    //                 "src/data/**/*",
    //                 "src/drizzle/**/*",
    //                 "src/hooks/**/*",
    //                 "src/lib/**/*",
    //                 "src/server/**/*",
    //                 "src/configs/**/*",
    //                 "src/core/**/*",
    //                 "src/utils/**/*",
    //                 "src/providers/**/*",
    //                 "src/fonts/**/*",
    //                 "src/db/**/*",
    //             ],
    //         },
    //         {
    //             mode: "full",
    //             type: "feature",
    //             capture: ["featureName"],
    //             pattern: ["src/features/*/**/*"],
    //         },
    //         {
    //             mode: "full",
    //             type: "app",
    //             capture: ["_", "fileName"],
    //             pattern: ["src/app/**/*"],
    //         },
    //         {
    //             mode: "full",
    //             type: "neverImport",
    //             pattern: ["src/*", "src/tasks/**/*"],
    //         },
    //     ],
    // },
    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "no-extra-boolean-cast": "off",
        "no-unused-vars": "warn",
        "no-duplicate-imports": ["error", { includeExports: true }],
        "no-undef": "warn",
        "no-use-before-define": "error",
        "no-console": ["warn", { allow: ["warn", "error", "info"] }],
        "no-var": "error",

        // "boundaries/no-unknown": ["error"],
        // "boundaries/no-unknown-files": ["error"],
        // "boundaries/element-types": [
        //     "error",
        //     {
        //         default: "disallow",
        //         rules: [
        //             {
        //                 from: ["shared"],
        //                 allow: ["shared"],
        //             },
        //             {
        //                 from: ["feature"],
        //                 allow: ["shared", ["feature", { featureName: "${from.featureName}" }]],
        //             },
        //             {
        //                 from: ["app", "neverImport"],
        //                 allow: ["shared", "feature"],
        //             },
        //             {
        //                 from: ["app"],
        //                 allow: [["app", { fileName: "*.css", fileName: "*.tsx" }]],
        //             },
        //         ],
        //     },
        // ],
    },
};
