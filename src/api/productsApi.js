import axiosClient from './axiosClient';

const productsApi = {
  getAll: (params) => {
    return axiosClient.get('/products', { params });
  },
  get: (id) => {
    return axiosClient.get(`/products/${id}`);
  },
  add: (data) => {
    return axiosClient.post('/products', data);
  },
  update: (data) => {
    return axiosClient.patch(`/products/${data.id}`, data);
  },
  remove: (id) => {
    return axiosClient.delete(`/products/${id}`);
  },
};

export default productsApi;
