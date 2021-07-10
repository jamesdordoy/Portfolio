import VueSweetalert2 from 'vue-sweetalert2';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'sweetalert2/dist/sweetalert2.min.css';

// eslint-disable-next-line import/prefer-default-export
export function load(Vue) {
    Vue.use(VueSweetalert2, {
        confirmButtonColor: '#41b882',
        cancelButtonColor: '#ff7674',
    });

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$alertError = (errorMessage) => {
        Vue.swal({
            confirmButtonColor: '#189ad6',
            html: errorMessage,
            icon: 'error',
            title: 'Something went wrong',
        });
    };
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$alertSuccess = (successMessage) => {
        Vue.swal({
            confirmButtonColor: '#189ad6',
            html: successMessage,
            icon: 'success',
            title: 'Success',
        });
    };
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$toastError = (errorMessage) => {
        Vue.swal({
            icon: 'error',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            title: errorMessage,
            toast: true,
        });
    };
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$toastInfo = (infoMessage) => {
        Vue.swal({
            icon: 'info',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            title: infoMessage,
            toast: true,
        });
    };
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$toastSuccess = (successMessage) => {
        Vue.swal({
            icon: 'success',
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            title: successMessage,
            toast: true,
        });
    };
}
