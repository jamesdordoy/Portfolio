/**
 * AbstractService.js
 * Axios promise based HTTP libary wrapper
 *
 *
 */

import client from './AxiosService';

export default class AbstractService {
    /**
     * Constructor
     *
     * @param string baseUrl
     * @return this
     */
    constructor() {
        this.client = client;
    }
}
