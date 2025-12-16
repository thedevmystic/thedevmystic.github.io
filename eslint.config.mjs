/**
 * Copyright 2025 Suryansh Singh
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
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

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";

/**
 * @description Path to the tsconfig file (important for type-aware linting)
 */
const tsconfigPath = "./tsconfig.json";

const eslintConfig = defineConfig([
  // Base configuration recommended by Next.js for core web vitals
  ...nextVitals,
  
  // Next.js TypeScript rules (must come before other TS plugins)
  ...nextTs,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      // Add all necessary plugins
      react: react,
      "jsx-a11y": jsxA11y,
      "@typescript-eslint": typescriptEslint,
      import: importPlugin,
    },
    rules: {
      // Enforce rules for React components and hooks
      "react/jsx-key": "error",
      "react/no-unescaped-entities": "error",
      "react/jsx-no-target-blank": "error",
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react/jsx-uses-react": "off", // Not needed with React 17+ JSX transform
      "react/react-in-jsx-scope": "off", // Not needed with React 17+ JSX transform

      // Enforce best practices for accessibility
      ...jsxA11y.configs.recommended.rules,
      "jsx-a11y/alt-text": ["warn", { elements: ["img"] }],
      
      "import/no-unresolved": "error", // Ensure all imports resolve
      "import/order": [ // Enforce consistent import order
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

      "no-console": ["warn", { allow: ["warn", "error"] }], // Allow only warn/error console logs
      "prefer-const": "error", // Use const by default
      "max-len": ["warn", { code: 120, ignoreUrls: true, ignoreComments: true }],
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
  
  {
    files: ["**/*.ts", "**/*.tsx"],
    extends: [
      // Recommended TypeScript rules
      typescriptEslint.configs.recommended,
      // TypeScript specific rules that require type information
      typescriptEslint.configs.recommendedTypeChecked, 
    ].map(config => ({
        ...config,
        languageOptions: {
          ...config.languageOptions,
          parserOptions: {
            project: tsconfigPath,
            tsconfigRootDir: __dirname,
          },
        },
      })),
    // Type-aware rules need a special parser configuration
    languageOptions: {
      parserOptions: {
        project: tsconfigPath,
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // Example TypeScript strictness rules
      "@typescript-eslint/explicit-function-return-type": "off", // Often too verbose
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-floating-promises": "error", // Crucial for robustness
    },
  },

  globalIgnores([
    // Next.js default build/output folders
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts", 
    "app/sw.ts",
  ]),
]);

export default eslintConfig;

