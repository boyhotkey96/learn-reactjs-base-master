import { Box, Skeleton, Typography } from '@mui/material';
import categorieApi from 'api/categorieApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

Filterbycategorie.propTypes = {
  onChange: PropTypes.func,
};

const Wrapper = styled(Box)`
  padding: 20px;
  & ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    & li {
      margin-top: 5px;
      & > span {
        cursor: pointer;
        transition: all 0.25s ease-out;
        &:hover {
          color: #513d3d;
        }
      }
    }
  }
`;

// Test css
/* const styleCss = {
  root: {
    padding: '20px',
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
  'menu-item': {
    marginTop: '10px',
  },
  span: {
    cursor: 'pointer',
    transition: 'all 0.25s ease-out',
    ':hover': {
      color: '#513d3d',
    },
  },
}; */

function Filterbycategorie({ onChange }) {
  const [categorieList, setcategorieList] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const data = await categorieApi.getAll();
        setcategorieList(
          data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Failed to fetch categories list', error);
      } finally {
        setIsloading(false);
      }
    })();
  }, []);

  const handleClick = (categorie) => {
    if (onChange) {
      onChange(categorie);
    }
  };

  return isLoading ? (
    <SekeletonEffect />
  ) : (
    <Wrapper>
      <Typography sx={{ marginBottom: '10px' }} variant="subtitle2" textTransform="uppercase">
        Danh mục sản phẩm
      </Typography>
      <ul>
        {categorieList.map((categorie) => (
          <li key={categorie.id}>
            <span onClick={handleClick.bind(null, categorie)}>{categorie.name}</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

function SekeletonEffect() {
  return (
    <>
      <Skeleton width={140} height={40} />
      <Skeleton width={100} height={25} />
      <Skeleton width={100} height={25} />
      <Skeleton width={100} height={25} />
      <Skeleton width={100} height={25} />
      <Skeleton width={100} height={25} />
    </>
  );
}

export default Filterbycategorie;
