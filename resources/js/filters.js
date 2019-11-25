export default {
    formatDate: () => (value, format) => {
        if (!value) return '';
        return moment(value).isValid() ? moment(value).format(format) : '';
    },
    capitalize: () => {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}