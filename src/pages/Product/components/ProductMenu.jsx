import { Link } from '@mui/material';
import { NavLink, useLocation, useMatch } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  & li {
    margin-right: 20px;
  }
  & a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

function ProductMenu() {
  const location = useLocation();
  const match = useMatch('/product/:productId');
  // console.log(match);
  // console.log(location);

  let urlCurrent = '';

  // console.log(window.location);

  if (location.pathname.includes('infomation') || location.pathname.includes('review')) {
    let arrPathName = location.pathname.split('/');
    urlCurrent = `/${arrPathName[1]}/${arrPathName[2]}`;

    // Solution 2:
    // let pathSubmenu = location.pathname.slice(location.pathname.lastIndexOf('/'));
    // let tmp = location.pathname.slice(location.pathname.indexOf('/'), -pathSubmenu.length);
    // console.log(tmp);
  }

  return (
    <Ul>
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
    </Ul>
  );
}

export default ProductMenu;
