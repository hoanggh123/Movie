const api_key = "754e75146c7cf7812d1b264edc6507ff";
const imgBaseURL = "https://image.tmdb.org/t/p/";

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data, optionalParam));
};
export{imgBaseURL,api_key,fetchDataFromServer}