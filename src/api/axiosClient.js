import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.ezfrontend.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log('ERROR RESPONSE: ', error.response);
    const { config, status, data } = error.response;

    if (config.url === '/auth/local/register' && status >= 400) {
      // console.log('ERROR MESSAGE: ', data.data[0].messages[0].message)
      throw new Error(data.data[0].messages[0].message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
