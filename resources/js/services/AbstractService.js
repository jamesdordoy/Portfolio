/**
 * AbstractService.js
 * Axios promise based HTTP libary wrapper
 *
 * @version 0.1
 * @author  Neon Digital
 *
 */

"use strict";

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
};