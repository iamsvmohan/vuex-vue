import axios from 'axios'

const API_URL = 'https://api.github.com';

const instance = axios.create({
    baseURL: API_URL,
//     headers: {
//         'crossdomain': true,
//         'Content-Type': 'application/json',
// //        'Authorization': 'Bearer ' + localStorage._token
//     }
}) 

// instance.interceptors.request.use(config => {
//     Vue.prototype.$Progress.start()
//     config.headers.Authorization = `Bearer ${localStorage._token}`;
//     return config;
// });

// instance.interceptors.response.use(response => {
//     Vue.prototype.$Progress.finish()
//     return response;
// });

export default instance