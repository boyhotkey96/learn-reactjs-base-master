import axiosClient from './axiosClient';

const categorieApi = {
  getAll: (params) => {
    return axiosClient.get('/categories', { params });
  },
};

export default categorieApi;
