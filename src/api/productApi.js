import axiosClient from './axiosClient';

const productApi = {
  getAll: async (params) => {
    const newParams = { ...params };

    newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);

    // remove params ._page
    delete newParams._page;

    // GET: /product?_start=0_limit=10
    // Fetch product list + count
    const data = await axiosClient.get('/products', {
      params: newParams,
      // params: { _start: newParams._start, _limit: newParams._limit },
    });

    const count = await axiosClient.get('/products/count', { params: newParams });

    // return object: data & pagination
    return {
      data: data,
      pagination: {
        _page: params._page,
        _limit: params._limit,
        _total: count,
      },
    };
  },
  get: (id) => {
    return axiosClient.get(`/products/${id}`);
  },
};

export default productApi;
