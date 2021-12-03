/* eslint-disable no-useless-constructor */
import Axios from 'axios';
import { BASE_URL } from '../Contances/const';


export class Http {
    static _getHeader() {
        const token = JSON.parse(window.sessionStorage.getItem('user'))
            console.log('yokrn', token);
        return {
          "Authorization": `Bearer ${token.id}`,
        }; 
      }

    constructor() {

    }

    static get = (endPoint, params) => {
        const options = {
            headers: this._getHeader(),
        }
        if (params && Object.keys(params).length) {
            options.params = params;
        }
        return Axios.get(BASE_URL + endPoint, options);
    }

    static post = (endPoint, payload) => {
        return Axios.post(BASE_URL + endPoint, payload, {
            headers: this._getHeader(),
        });
    }
}
