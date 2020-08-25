export default function formatDate(value, format) {
    if (!value) return '';
    return moment(value).isValid() ? moment(value).format(format) : '';
}
