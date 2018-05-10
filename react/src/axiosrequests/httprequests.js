import axios from 'axios';


export const postRequest = (endpoint, payload = {}) => {
  return axios.post(endpoint, payload);


}


export const patchRequest = (endpoint, payload = {}) => {
  return axios.patch(endpoint, payload);


}


// export const postRequest1=(endpoint)=> {
//   axios.post(endpoint, payload)
//   .then(function (response) {
//     return response;
//   })
//   .catch(function (error) {
//   	return error;
//   });


// }

export const getrequest = (endpoint) => {
  axios.get(endpoint);

}