module.exports = {
    purge: ['./storage/framework/views/*.php', './resources/views/**/*.blade.php'],
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
    }
}
