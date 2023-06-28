import { Alert, Box, Container, Grid, Pagination, Paper, Stack, styled } from '@mui/material';
import productApi from 'api/productApi';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductFilters from './components/ProductFilters';
import ProductList from './components/ProductList';
import ProductSkeletonList from './components/ProductSkeletonList';
import ProductSortPrice from './components/ProductSortPrice';
import FilterViewer from './components/filters/FilterViewer';

// START: css styled mui
const GridLeft = styled(Grid)`
  width: 250px;
`;

const GridRight = styled(Grid)`
  flex: 1;
`;

const styleProductItem = {
  xs: 6,
  md: 4,
  sx: {
    marginBottom: '3rem',
    padding: '0 10px',
  },
};

const WrapPagination = styled(Box)`
  margin-top: 2.5rem;
  padding-bottom: 1rem;
`;
// END: css styled mui

const CONSTANT = {
  tab: 'default',
};

function ListPage() {
  let navigate = useNavigate();
  let location = useLocation();

  // let queryParams = queryString.parse(location.search);
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    const newParams = {
      ...params,
      _limit: Number.parseInt(params._limit) || 9,
      _page: Number.parseInt(params._page) || 1,
      // _sort: params._sort || CONSTANT.tab,
      isPromotion: ['true', 'false'].includes(params.isPromotion) ? params.isPromotion === 'true' : undefined,
      isFreeShip: ['true', 'false'].includes(params.isFreeShip) ? params.isFreeShip === 'true' : undefined,
      // isPromotion: params.isPromotion === 'true',
      // isFreeShip: params.isFreeShip === 'true',
    };

    // Remove to url params when get api: isPromotion === false, isFreeShip === false
    /* const { isPromotion, isFreeShip } = newParams;
    !isPromotion && delete newParams.isPromotion;
    !isFreeShip && delete newParams.isFreeShip; */

    return newParams;
  }, [location.search]);

  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  // const [filters, setFilters] = useState({
  //   _limit: 9,
  //   _page: 1,
  //   // _sort: 'salePrice:ASC',
  // });

  // const [filters, setFilters] = useState({
  //   ...queryParams,
  //   _limit: Number.parseInt(queryParams._limit) || 9,
  //   _page: Number.parseInt(queryParams._page) || 1,
  // });
  const [isLoading, setIsloading] = useState(false);

  // useEffect(() => {
  //   const paramsString = queryString.stringify(filters);
  //   navigate(`?${paramsString}`);
  // }, [navigate, filters]);

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);

        // Test get api with fetch
        /* const params = {
          _start: 0,
          _limit: 10,
        };
        const url = new URL('https://api.ezfrontend.com/products');
        url.search = new URLSearchParams(params).toString();

        // const paramsString = queryString.stringify(params);
        // const requestUrl = `https://api.ezfrontend.com/products?${paramsString}`;

        const result = await fetch(url);
        const data = await result.json();
        console.log(data) */

        const response = await productApi.getAll(queryParams);
        // console.log(response);
        const { data, pagination } = response;
        setProducts(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch product: ', error);
      } finally {
        setIsloading(false);
      }
    })();
  }, [queryParams]);

  const handlePageChange = (e, page) => {
    // setFilters((prev) => ({ ...prev, _page: page }));

    const filters = { ...queryParams, _page: page };
    const params = queryString.stringify(filters);
    navigate(`?${params}`);
  };

  const handleSortChange = (newSortValue) => {
    // setFilters((prev) => {
    //   const newFilters = { ...prev, _sort: newSortValue };
    //   newSortValue === DEFAULT.tab && delete newFilters._sort;
    //   return newFilters;
    // });

    const filters = { ...queryParams, _sort: newSortValue };
    filters._sort === CONSTANT.tab && delete filters._sort;
    const params = queryString.stringify(filters);
    navigate(`?${params}`);
  };

  const handleFiltersChange = (newFilters) => {
    // setFilters((prevFilters) => {
    //   const newFiltersLastOne = {
    //     ...prevFilters,
    //     ...newFilters,
    //   };

    //   // Remove: isPromotion/isFreeship === false when unchecked from url
    //   const { isPromotion, isFreeShip } = newFiltersLastOne;
    //   !isPromotion && delete newFiltersLastOne.isPromotion;
    //   !isFreeShip && delete newFiltersLastOne.isFreeShip;

    //   return newFiltersLastOne;
    // });

    // console.log(newFilters);
    const filters = { ...queryParams, ...newFilters };

    // Remove to url location: isPromotion === false, isFreeShip === false
    const { isPromotion, isFreeShip } = filters;
    !isPromotion && delete filters.isPromotion;
    !isFreeShip && delete filters.isFreeShip;

    const params = queryString.stringify(filters);
    navigate(`?${params}`);
  };

  const handleViewerChange = (newFilters) => {
    // setFilters(newFilters);

    const params = queryString.stringify(newFilters);
    navigate(`?${params}`);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1} p={1}>
          <GridLeft item>
            <Paper elevation={0}>
              {/* Component Categories */}
              <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
            </Paper>
          </GridLeft>
          <GridRight item>
            <Paper elevation={0}>
              {isLoading ? (
                <ProductSkeletonList {...styleProductItem} length={9} />
              ) : (
                <>
                  {/* Component Sort Price */}
                  <ProductSortPrice currentValue={queryParams._sort || CONSTANT.tab} onChange={handleSortChange} />

                  {/* Component Filter Viewer */}
                  <FilterViewer filters={queryParams} onChange={handleViewerChange} />

                  {/* Component Products */}
                  <ProductList products={products} styleProductItem={styleProductItem} />

                  {/* Component Pagination */}
                  <WrapPagination>
                    <Stack sx={{ padding: '0 8px' }} spacing={2}>
                      {pagination._total ? (
                        <Pagination
                          sx={{ display: 'flex', justifyContent: 'center' }}
                          color="primary"
                          // shape="rounded"
                          hidePrevButton={!pagination._total}
                          hideNextButton={!pagination._total}
                          count={Math.ceil(pagination._total / pagination._limit) || -1}
                          page={pagination._page}
                          defaultPage={1}
                          onChange={handlePageChange}
                        />
                      ) : (
                        <Alert sx={{ marginTop: '40px' }} severity="warning">
                          Rất tiếc, không tìm thấy sản phẩm phù hợp với lựa chọn của bạn
                        </Alert>
                      )}
                    </Stack>
                  </WrapPagination>
                </>
              )}
            </Paper>
          </GridRight>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
