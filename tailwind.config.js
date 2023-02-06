const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/@protonemedia/inertiajs-tables-laravel-query-builder/**/*.{js,vue}',
    ],
    safelist: [
        {
            pattern:
                /(border|bg|text)-(red|orange|yellow|green|gray|teal|blue|purple|indigo|pink|lime|emerald|stone|zinc|slate|sky)-(100|200|300|400|500|600|700|800|900)/,
            variants: ['hover', 'focus'],
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#3a4145',
                secondary: colors.slate,
                gray: colors.gray,
                red: colors.red,
                lime: colors.lime,
                orange: colors.orange,
                yellow: colors.yellow,
                green: colors.green,
                teal: colors.teal,
                blue: colors.blue,
                sky: colors.sky,
                indigo: colors.indigo,
                purple: colors.purple,
                pink: colors.pink,
                emerald: colors.emerald,
                stone: colors.stone,
                zinc: colors.zinc,
                slate: colors.slate,
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
