/**
 * Axios client instance
 */

const axios = require('axios');

const getClient = () => {
    const options = {
        baseURL: '/',
    };

    const client = axios.create(options);

    // //Requests
    // client.interceptors.request.use(
    //   requestConfig => requestConfig,
    //   requestError => {
    //     Raven.captureException(requestError);

    //     return Promise.reject(requestError);
    //   },
    // );

    // //Responses
    // //400
    // client.interceptors.response.use(
    //   response => response,
    //   error => {
    //     if (error.response.status === 400) {
    //       Raven.captureException(error);
    //     }

    //     return Promise.reject(error);
    //   },
    // );

    // 401
    client.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                // eslint-disable-next-line no-alert
                alert('Warning, you have been logged out. Please log back in');
            }

            return Promise.reject(error);
        }
    );

    // 403
    client.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 403) {
                // eslint-disable-next-line no-alert
                alert('You do not have permission to access this resource');
            }

            return Promise.reject(error);
        }
    );

    // //404
    // client.interceptors.response.use(
    //   response => response,
    //   error => {
    //     if (error.response.status === 404) {
    //       Raven.captureException(error);
    //     }

    //     return Promise.reject(error);
    //   },
    // );

    // //422
    // client.interceptors.response.use(
    //   response => response,
    //   error => {
    //     if (error.response.status === 422) {
    //       Raven.captureException(error);
    //     }

    //     return Promise.reject(error);
    //   },
    // );

    // //429
    // client.interceptors.response.use(
    //   response => response,
    //   error => {
    //     if (error.response.status === 429) {
    //       Raven.captureException(error);
    //     }

    //     return Promise.reject(error);
    //   },
    // );

    // //500
    // client.interceptors.response.use(
    //   response => response,
    //   error => {
    //     if (error.response.status >= 500) {
    //       Raven.captureException(error);
    //     }

    //     return Promise.reject(error);
    //   },
    // );

    return client;
};

class ApiClient {
    constructor(baseUrl = null) {
        this.client = getClient(baseUrl);
    }

    // eslint-disable-next-line no-unused-vars
    get(url, conf = {}, loading = true) {
        return this.client
            .get(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    // eslint-disable-next-line no-unused-vars
    delete(url, conf = {}, loading = true) {
        return this.client
            .delete(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    // eslint-disable-next-line no-unused-vars
    head(url, conf = {}, loading = true) {
        if (loading) {
            // eslint-disable-next-line no-undef
            store.commit('startLoading');
        }

        return this.client
            .head(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    // eslint-disable-next-line no-unused-vars
    options(url, conf = {}, loading = true) {
        return this.client
            .options(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    // eslint-disable-next-line no-unused-vars
    post(url, data = {}, conf = {}, loading = true) {
        return this.client
            .post(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    // eslint-disable-next-line no-unused-vars
    put(url, data = {}, conf = {}, loading = true) {
        return this.client
            .put(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }

    // eslint-disable-next-line no-unused-vars
    patch(url, data = {}, conf = {}, loading = true) {
        return this.client
            .patch(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    }
}

export { ApiClient };

/**
 * Base HTTP Client
 */
export default {
    // Provide request methods with the default base_url

    // eslint-disable-next-line no-unused-vars
    get(url, conf = {}, loading = true) {
        return getClient()
            .get(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    // eslint-disable-next-line no-unused-vars
    delete(url, conf = {}, loading = true) {
        return getClient()
            .delete(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    // eslint-disable-next-line no-unused-vars
    head(url, conf = {}, loading = true) {
        return getClient()
            .head(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    // eslint-disable-next-line no-unused-vars
    options(url, conf = {}, loading = true) {
        return getClient()
            .options(url, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    // eslint-disable-next-line no-unused-vars
    post(url, data = {}, conf = {}, loading = true) {
        return getClient()
            .post(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    // eslint-disable-next-line no-unused-vars
    put(url, data = {}, conf = {}, loading = true) {
        return getClient()
            .put(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
    // eslint-disable-next-line no-unused-vars
    patch(url, data = {}, conf = {}, loading = true) {
        return getClient()
            .patch(url, data, conf)
            .then((response) => Promise.resolve(response))
            .catch((error) => Promise.reject(error));
    },
};
