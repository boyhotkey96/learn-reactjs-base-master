import productsApi from 'api/productsApi';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      async function fetchProducts() {
        const data = await productsApi.getAll();
        // const data = await getProducts.get(13637765);
        // const data = await getProducts.add({name: 'lazada shop'});
        // const data = await getProducts.update({ id: 13637765, name: 'Lazada' });
        // const data = await getProducts.remove({ id: 23505612 });
        console.log(data);
        setProducts(data);
      }
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default Products;
