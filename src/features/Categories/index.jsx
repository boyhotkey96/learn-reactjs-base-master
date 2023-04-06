import categoriesApi from 'api/categoriesApi';
import { useEffect, useState } from 'react';
import CategoriesList from './components/CategoriesList';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        const data = await categoriesApi.getAll();
        console.log(data);
        setCategories(data);
      };
      fetchCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <CategoriesList categories={categories} />;
}

export default Categories;
