module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
    ],
    rules: {},
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './resources/js']],
                extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
            },
        },
    },
}
