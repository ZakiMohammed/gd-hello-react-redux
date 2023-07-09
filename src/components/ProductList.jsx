import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import data from '../services/products.service';
import { getAll } from '../reducers/ProductReducers'

const ProductList = () => {
  const filtered = useSelector(state => state.product.filtered);
  const products = useSelector(state => state.product.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch(getAll(data));
      } catch (error) {
        console.log(`Error Occurred: ${error.message}`);
      }
    };

    if (!products) {
      getProducts();
    }
  }, [dispatch, products]);

  return (
    <>
      <h2 className="title is-5 mb-5">
        <span className="tag is-primary is-light has-float-right">Count: {filtered?.length || 0}</span>
        🧸 Products
      </h2>
      <div className="columns is-multiline">
        {filtered?.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
