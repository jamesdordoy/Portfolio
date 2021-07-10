import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const icons = [
    'faCog',
    'faList',
    'faTimes',
    'faSignInAlt',
    'faSignOutAlt',
    'faExclamationTriangle',
    'faCheck',
    'faDatabase',
    'faGithub',
    'faFacebook',
    'faTwitter',
    'faLinkedin',
    'faJsfiddle',
    'faBuilding',
    'faSchool',
    'faCode',
];

// eslint-disable-next-line import/prefer-default-export
export function load(Vue) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < icons.length; i++) {
        try {
            library.add(
                // eslint-disable-next-line global-require
                require('@fortawesome/free-solid-svg-icons')[icons[i]]
            );
        } catch (e) {
            if (i === 4) {
                // console.log(e);
            }
        }
        try {
            library.add(
                // eslint-disable-next-line global-require
                require('@fortawesome/free-brands-svg-icons')[icons[i]]
            );
        } catch (e) {
            if (i === 4) {
                // console.log(e);
            }
        }
        try {
            library.add(
                // eslint-disable-next-line global-require
                require('@fortawesome/free-regular-svg-icons')[icons[i]]
            );
        } catch (e) {
            if (i === 4) {
                // console.log(e);
            }
        }
    }

    Vue.component('FontAwesomeIcon', FontAwesomeIcon);
}
