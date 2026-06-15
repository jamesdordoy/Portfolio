import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
    {
        ignores: ['public/**', 'vendor/**'],
    },
    js.configs.recommended,
    // Disable eslint rules superseded by the TypeScript compiler for *.ts files
    tsPlugin.configs['flat/eslint-recommended'],
    // TypeScript parser for .ts/.d.ts files
    {
        files: ['**/*.ts'],
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        languageOptions: {
            parser: tsParser,
        },
    },
    // Vue 3 recommended rules (also sets vue-eslint-parser for *.vue files)
    ...pluginVue.configs['flat/recommended'],
    // TypeScript parser for <script lang="ts"> blocks inside .vue files
    {
        files: ['**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tsParser,
            },
        },
    },
    // Project globals — browser env + project-specific App type
    {
        files: ['resources/**/*.{vue,ts}'],
        languageOptions: {
            globals: {
                ...globals.browser,
                App: 'writable',
            },
        },
    },
    // Type declaration files — no-unused-vars is always a false positive here
    {
        files: ['**/*.d.ts'],
        rules: {
            'no-unused-vars': 'off',
        },
    },
    // Rule overrides
    {
        files: ['resources/**/*.vue'],
        rules: {
            // These single-word component names are intentional in this project
            'vue/multi-word-component-names': ['error', {
                ignores: ['Footer', 'Game', 'Project', 'Settings'],
            }],
        },
    },
    // Must be last — disables formatting rules handled by Prettier
    prettier,
];
