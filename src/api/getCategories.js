import axiosClient from './axiosClient';

const getCategories = {
  getAll: (params) => {
    return axiosClient.get('/categories', { params });
  },
  get: (id) => {
    return axiosClient.get(`/categories/${id}`);
  },
  add: (data) => {
    return axiosClient.get('/categories', data);
  },
  update: (data) => {
    return axiosClient.get(`/categories/${data.id}`, data);
  },
  remove: (id) => {
    return axiosClient.get(`/categories/${id}`);
  },
};

export default getCategories;
