/* eslint no-param-reassign: "off" */

import axios from 'axios';
import Qs from 'qs';

/**
 * See more detial: https://github.com/mzabriskie/axios#request-config
 *
 */
const instance = axios.create({
  /*
   * `baseURL` will be prepended to `url` unless `url` is absolute.
   * It can be convenient to set `baseURL` for an instance of axios to pass relative URLs to methods of that instance.
   **/
  baseURL: 'http://127.0.0.1:8000/api/v1',

  /*
   * `transformRequest` allows changes to the request data before it is sent to the server
   * This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
   * The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
   * FormData or Stream
   */
  transformRequest: [function transformRequest(data) {
    // Do whatever you want to transform the data
    return data;
  }],

  /*
   * `transformResponse` allows changes to the response data to be made before it is passed to then/catch
   */
  transformResponse: [function transformResponse(data) {
    // Do whatever you want to transform the data
    if (data.head.errorCode === 0) {
      return data.body;
    } else {
      return Promise.reject(data.head);
    }

  }],

  /*
   * `paramsSerializer` is an optional function in charge of serializing `params`
   * (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
   */
  paramsSerializer: function paramsSerializer(params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' });
  },

  /*
   * `responseType` indicates the type of data that the server will respond with
   * options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
   */
  responseType: 'json'

});

/**
 * request interceptort
 * avoid
 */
instance.interceptors.request.use(function CommitRepeatInterceptor(config) {
  if (process.env.NODE_ENV === 'development') {
    config.url = `${config.url}.json`;
  }
  return config;
});

/**
 *Normal response interceptor
 */
instance.interceptors.response.use(function NormalResponseIntercepter(response) {
  return response.data;
});


export default instance;
