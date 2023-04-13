import axiosClient from './axiosClient';

const productApi = {
  getAll: async (params) => {
    const newParams = { ...params };

    newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params.limit || 50);

    // remove params ._page
    delete newParams._page;

    // Fetch product list + count
    const productList = await axiosClient.get('/products', { params: newParams });
    const count = await axiosClient.get('/products/count', { params: newParams });

    // return object: data & pagination
    return {
      data: productList,
      pagination: {
        page: params.page,
        limit: params.limit,
        total: count,
      },
    };
  },
};

export default productApi;
