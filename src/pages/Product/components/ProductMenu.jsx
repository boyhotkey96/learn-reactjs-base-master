import { Link } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

function ProductMenu() {
  const location = useLocation();
  // console.log(location);

  let urlCurrent = '';

  if (location.pathname.includes('infomation') || location.pathname.includes('review')) {
    let arrPathName = location.pathname.split('/');
    urlCurrent = `/${arrPathName[1]}/${arrPathName[2]}`;
  }

  return (
    <ul>
      <li>
        <Link component={NavLink} to={`${urlCurrent}`}>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to="infomation">
          Additional Infomation
        </Link>
      </li>
      <li>
        <Link component={NavLink} to="review">
          Reviews
        </Link>
      </li>
    </ul>
  );
}

export default ProductMenu;
