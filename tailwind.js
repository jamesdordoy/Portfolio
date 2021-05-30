module.exports = {
    purge: false,
    theme: {
        extend: {
            colors: {
                'primary': '#3a4145',
                'secondary': '#22292f',
                teal: {
                    100: '#e6fffa',
                    200: '#b2f5ea',
                    300: '#81e6d9',
                    400: '#4fd1c5',
                    500: '#38b2ac',
                    600: '#319795',
                    700: '#2c7a7b',
                    800: '#285e61',
                    900: '#234e52',
                },
                orange: {
                    100: '#fffaf0',
                    200: '#feebc8',
                    300: '#fbd38d',
                    400: '#f6ad55',
                    500: '#ed8936',
                    600: '#dd6b20',
                    700: '#c05621',
                    800: '#9c4221',
                    900: '#7b341e',
                },
            }
        }
    },
    future: {
        removeDeprecatedGapUtilities: true,
    },
    variants: {
        opacity: ['disabled'],
        cursor: ['disabled', 'hover'],
        zIndex: ['focus'],
        backgroundColor: ['hover', 'focus', 'even'],
    },
}
