module.exports = {
    purge: false,
    theme: {
        extend: {
            colors: {
                'primary': '#3a4145',
                'secondary': '#22292f',
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
