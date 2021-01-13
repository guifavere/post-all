import axios from 'axios';

const api = axios.create({ baseURL: '/api/' });

// api.interceptors.response.use(
//   res => res,
//   error => {
//     console.log('HERE', error);
//     throw new Error(error.response.data.message);
//   }
// )

export default api;
