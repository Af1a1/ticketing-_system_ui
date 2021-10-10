import axios from 'axios';
import auth from '../auth';

/**
 * This module handle the api requests
 */
export default {
  get(route: string) {
    const url = 'http://localhost:5000' + route;
    // const options = {
    //   headers: { Authorization: auth.getAuthToken() },
    // };

    //return axios.get(url, options);
    return axios.get(url);
  },
  post(route: string, payload: any) {
    const url = 'http://localhost:5000' + route;
    // const options = {
    //   headers: { Authorization: auth.getAuthToken() },
    // };

    //return axios.post(url, payload, options);
    return axios.post(url, payload);
  },
  put(route: string, payload: any) {
    const url = 'http://localhost:5000' + route;
    // const options = {
    //   headers: { Authorization: auth.getAuthToken() },
    // };

    //return axios.put(url, payload, options);
    return axios.put(url, payload);
  },
  delete(route: string, payload: any) {
    const url = 'http://localhost:5000' + route;
    // const options = {
    //   headers: { Authorization: auth.getAuthToken() },
    //   data: payload,
    // };

    // return axios.delete(url, options);
    return axios.delete(url);
  },
};
