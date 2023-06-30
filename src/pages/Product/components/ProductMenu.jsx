import { Box, Link } from '@mui/material';
import { NavLink, useLocation, useResolvedPath } from 'react-router-dom';
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
    &.active {
      text-decoration: underline;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

function ProductMenu() {
  const location = useLocation();
  let urlCurrent = '';
  // Inffective
  if (location.pathname.includes('infomation') || location.pathname.includes('review')) {
    let arrPathName = location.pathname.split('/');
    urlCurrent = `/${arrPathName[1]}/${arrPathName[2]}`;

    // Solution 2:
    // let pathSubmenu = location.pathname.slice(location.pathname.lastIndexOf('/'));
    // let tmp = location.pathname.slice(location.pathname.indexOf('/'), -pathSubmenu.length);
    // console.log(tmp);
  }

  const url = useResolvedPath('').pathname;

  return (
    <Box component={Ul}>
      <li>
        <Link component={NavLink} end to={url}>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} end to="infomation">
          Additional Infomation
        </Link>
      </li>
      <li>
        <Link component={NavLink} end to={`${url}/review`}>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
