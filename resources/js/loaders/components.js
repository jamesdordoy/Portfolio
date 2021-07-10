import LanguagesCreateModal from '../back/language/CreateLanguageModal.vue';
import TweetsTable from '../back/twitter/TweetsTable.vue';
import BackNav from '../back/includes/Nav.vue';
import Posts from '../back/blog/elements/Posts.vue';
import Layout from '../back/views/Layout.vue';
import ProjectCreate from '../back/project/Create.vue';

import BackModal from '../components/Modal.vue';
import BackNavLink from '../components/NavLink.vue';
import TextInput from '../components/TextInput.vue';
import FileInput from '../components/FileInput.vue';
import FileInputDisplay from '../components/FileInputDisplay.vue';
import FormGroup from '../components/FormGroup.vue';
import FormError from '../components/FormError.vue';
import TextareaInput from '../components/TextareaInput.vue';
import SmallButton from '../components/SmallButton.vue';
import OutlineButton from '../components/OutlineButton.vue';
import TailwindSelect from '../components/TailwindSelect.vue';
import Timeline from '../components/Timeline.vue';
import Particles from '../components/Particles.vue';
import Tag from '../components/Tag.vue';
import Paginator from '../components/Pagination.vue';
import DataTableFilters from '../components/DataTableFilters.vue';

// eslint-disable-next-line import/prefer-default-export
export function load(Vue) {
    // Modals
    Vue.component('LanguagesCreateModal', LanguagesCreateModal);
    // Tables
    Vue.component('TweetsTable', TweetsTable);
    // Includes
    Vue.component('BackNav', BackNav);
    // Generic
    Vue.component('Posts', Posts);
    // Views
    Vue.component('Layout', Layout);
    Vue.component('ProjectCreate', ProjectCreate);

    // Generic
    Vue.component('BackModal', BackModal);
    Vue.component('BackNavLink', BackNavLink);
    Vue.component('TextInput', TextInput);
    Vue.component('FileInput', FileInput);
    Vue.component('FileInputDisplay', FileInputDisplay);
    Vue.component('FormGroup', FormGroup);
    Vue.component('FormError', FormError);
    Vue.component('TextareaInput', TextareaInput);
    Vue.component('SmallButton', SmallButton);
    Vue.component('OutlineButton', OutlineButton);
    Vue.component('TailwindSelect', TailwindSelect);
    Vue.component('Timeline', Timeline);
    Vue.component('Particles', Particles);
    Vue.component('Tag', Tag);
    Vue.component('Paginator', Paginator);
    Vue.component('DataTableFilters', DataTableFilters);
}
