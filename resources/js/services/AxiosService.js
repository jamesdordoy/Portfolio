/**
 * Axios client instance
 */

"use strict";

const axios = require("axios");

const getClient = () => {

    const options = {
      baseURL: '/'
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

    //401
    client.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
            alert("Warning, you have been logged out. Please log back in");
        }

        return Promise.reject(error);
      },
    );

    //403
    client.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 403) {
            alert("You do not have permission to access this resource");
        }

        return Promise.reject(error);
      },
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

  get(url, conf = {}, loading = true) {

    return this.client.get(url, conf)
      .then(response => {
        return Promise.resolve(response)
      })
      .catch(error => {
        return Promise.reject(error)
      });
  }

  delete(url, conf = {}, loading = true) {

    return this.client.delete(url, conf)
      .then(response => {

        return Promise.resolve(response)
      })
      .catch(error => {

        return Promise.reject(error)
      });
  }

  head(url, conf = {}, loading = true) {

    if (loading) {
      store.commit('startLoading');
    }

    return this.client.head(url, conf)
      .then(response => {

        return Promise.resolve(response)
      })
      .catch(error => {

        return Promise.reject(error)
      });
  }

  options(url, conf = {}, loading = true) {

    return this.client.options(url, conf)
      .then(response => {

        return Promise.resolve(response)
      })
      .catch(error => {

        return Promise.reject(error)
      });
  }

  post(url, data = {}, conf = {}, loading = true) {

    return this.client.post(url, data, conf)
      .then(response => {

        return Promise.resolve(response)
      })
      .catch(error => {

        return Promise.reject(error)
      });
  }

  put(url, data = {}, conf = {}, loading = true) {

    return this.client.put(url, data, conf)
      .then(response => {

        return Promise.resolve(response)
      })
      .catch(error => {

        return Promise.reject(error)
      });
  }

  patch(url, data = {}, conf = {}, loading = true) {

    return this.client.patch(url, data, conf)
      .then(response => {

        return Promise.resolve(response)
      })
      .catch(error => {

        return Promise.reject(error)
      });
    }
  }

  export { ApiClient };

  /**
   * Base HTTP Client
   */
  export default {
    // Provide request methods with the default base_url
    get(url, conf = {}, loading = true) {

      return getClient().get(url, conf)
        .then(response => {

          return Promise.resolve(response)
        })
        .catch(error => {

          return Promise.reject(error)
        });
    },

    delete(url, conf = {}, loading = true) {

      return getClient().delete(url, conf)
        .then(response => {

          return Promise.resolve(response)
        })
        .catch(error => {

          return Promise.reject(error)
        });
    },

    head(url, conf = {}, loading = true) {

      return getClient().head(url, conf)
        .then(response => {

          return Promise.resolve(response)
        })
        .catch(error => {

          return Promise.reject(error)
        });
    },

    options(url, conf = {}, loading = true) {

      return getClient().options(url, conf)
        .then(response => {

          return Promise.resolve(response)
        })
        .catch(error => {

          return Promise.reject(error)
        });
    },

    post(url, data = {}, conf = {}, loading = true) {

      return getClient().post(url, data, conf)
        .then(response => {

          return Promise.resolve(response)
        })
        .catch(function(error){

          return Promise.reject(error);
        });
    },

    put(url, data = {}, conf = {}, loading = true) {

      return getClient().put(url, data, conf)
        .then(response => {
          return Promise.resolve(response)
        })
        .catch(error => {
          return Promise.reject(error)
        });
    },

    patch(url, data = {}, conf = {}, loading = true) {

      return getClient().patch(url, data, conf)
        .then(response => {

          return Promise.resolve(response)
        })
        .catch(error => {

          return Promise.reject(error)
        });
    },
  };