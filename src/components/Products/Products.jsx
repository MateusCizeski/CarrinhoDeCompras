import React, { useEffect, useContext } from 'react';
import './Products.css';
import fetchProduts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProduts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return(
    (loading && <Loading />)  || (<section className="products container">
      {products.map((product) => <ProductCard key={product.id} data={product}/>)}
    </section>)
  ); 
}

export default Products;
