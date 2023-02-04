import { library } from '@fortawesome/fontawesome-svg-core';

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
    'faNewspaper',
];

export default async function loadFontAwesome() {
    for (let i = 0; i < icons.length; i++) {
        try {
            const icon = import('@fortawesome/free-brands-svg-icons').then((module) => {
                return module[icons[i]];
            });

            icon.then((thing) => {
                if (thing) {
                    library.add(thing);
                }
            });
        } catch (e) {
            if (i === 4) {
                console.log(e);
            }
        }

        try {
            const icon = await import('@fortawesome/free-solid-svg-icons').then((module) => {
                return module[icons[i]];
            });

            if (icon) {
                library.add(icon);
            }
        } catch (e) {
            if (i === 4) {
                console.log(e);
            }
        }
        try {
            const icon = await import('@fortawesome/free-regular-svg-icons').then((module) => {
                return module[icons[i]];
            });

            if (icon) {
                library.add(icon);
            }
        } catch (e) {
            if (i === 4) {
                console.log(e);
            }
        }
    }

    return library;
}
