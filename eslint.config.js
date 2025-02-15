import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import sonarjs from 'eslint-plugin-sonarjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // Apply rules to JavaScript, TypeScript, JSX, and TSX files
  },
  {
    languageOptions: {
      globals: globals.browser, // Add browser globals
    },
  },

  sonarjs.configs.recommended,
  pluginJs.configs.recommended, // Apply ESLint recommended rules for JavaScript
  ...tseslint.configs.recommended, // Apply TypeScript recommended rules
  pluginReact.configs.flat.recommended, // Apply React recommended rules
  {
    rules: {
      // Custom ESLint rules
      'JSX.IntrinsicElements':'off',
      '@typescript-eslint/no-explicit-any':'off',
      'sonarjs/no-duplicate-string': 'warn',
      'sonarjs/no-collapsible-if': 'error',
      'no-console': 'warn', // Warn about console usage
      'no-debugger': 'error', // Error if debugger is used
      'react/prop-types': 'off', // Disable prop-types rule in React (if using TypeScript)
      '@typescript-eslint/no-unused-vars': 'warn', // Warn about unused variables in TypeScript
      'react/jsx-uses-react': 'off', // React 17+ doesn't need to import React explicitly in JSX
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't need to be in scope for JSX
      'no-magic-numbers': [
        'warn',
        { ignore: [0, 1, -1] }, // Allow certain numbers like 0, 1, -1
      ],
    },
  },
];
