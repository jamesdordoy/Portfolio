export default {
    data() {
        return {
            errors: {},
        };
    },
    methods: {
        checkError(field) {
            if (this.errors) {
                if (this.errors[field]) {
                    return this.errors[field];
                }
            }
            return [];
        },
        setErrors(error) {
            this.errors = error.response.data.errors;
        },
        resetErrors() {
            this.errors = {};
        },
    },
};
