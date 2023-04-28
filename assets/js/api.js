'use strict';
const api_key = '3fd67b0a75a2861ff71511c8065512a7';
const imageBaseURL = 'https://image.tmdb.org/t/p/';
/**
 * Callback,json
 */
const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };