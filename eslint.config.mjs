/**
 * Copyright 2025 Suryansh Singh
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * ------------------------------------------------------------------------------------------------------
 *
 * @path [ROOT]/eslint.config.mjs
 * @file eslint.config.mjs
 * @description Configuration file for ESLint.
 *
 * @author thedevmystic (Surya)
 * @copyright 2025 Suryansh Singh Apache-2.0 License
 *
 * SPDX-FileCopyrightText: 2025 Suryansh Singh
 * SPDX-License-Identifier: Apache-2.0
 */

import { globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

/**
 * @description Path resolutions using native ESM URL API
 */
const tsconfigPath = "./tsconfig.json";
const tsconfigRootDir = new URL(".", import.meta.url).pathname;

const eslintConfig = tseslint.config(
  // 1. Global Ignores (This must be first)
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "app/sw.ts",
      "eslint.config.mjs" // Avoid linting the config with typed rules
    ]
  },

  // 2. Base configuration recommended by Next.js
  ...nextVitals,
  ...nextTs,

  // 3. TypeScript Rules (Typed)
  // We apply these specifically to source files to avoid the error you saw
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.tsx"],
  })),

  // 4. Main Project Configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: tsconfigPath,
        tsconfigRootDir: tsconfigRootDir,
      },
    },
    rules: {
      // --- React Rules ---
      "react/jsx-key": "error",
      "react/no-unescaped-entities": "error",
      "react/jsx-no-target-blank": "error",
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",

      // --- Accessibility Rules ---
      "jsx-a11y/alt-text": ["warn", { elements: ["img"] }],

      // --- Import Rules ---
      "import/no-unresolved": "error",
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "@/**", group: "internal" },
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // --- General Rules ---
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "max-len": ["warn", { code: 120, ignoreUrls: true, ignoreComments: true }],

      // --- TypeScript Overrides ---
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/await-thenable": "error",
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: {
          project: tsconfigPath,
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
);

export default eslintConfig;
