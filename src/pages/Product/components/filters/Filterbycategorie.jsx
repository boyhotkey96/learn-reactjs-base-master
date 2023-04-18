import { Skeleton, Typography } from '@mui/material';
import categorieApi from 'api/categorieApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

Filterbycategorie.propTypes = {
  onChange: PropTypes.func,
};

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
      onChange(categorie.id);
    }
  };

  return isLoading ? (
    <SekeletonEffect />
  ) : (
    <>
      <Typography>Danh mục sản phẩm</Typography>
      <ul>
        {categorieList.map((cat) => (
          <li key={cat.id} onClick={handleClick.bind(null, cat)}>
            {cat.name}
          </li>
        ))}
      </ul>
    </>
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
