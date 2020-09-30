export default function dateDifference(to) {
    if (!to) return '';
    let momentA = moment(to);
    let momentB = moment();
    return momentB.diff(momentA, 'years');
}
