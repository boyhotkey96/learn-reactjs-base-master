import { Outlet, useLocation } from 'react-router-dom';

Product.propTypes = {};

function Product(props) {
  // const location = useResolvedPath();
  // const { pathname } = useLocation();
  // console.log(pathname);

  return (
    <>
      <Outlet />
    </>
  );
}

export default Product;
