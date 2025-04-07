import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { CartItem } from '../types/CartItem';
import styled from 'styled-components';

interface Props {
  addToCart: (product: CartItem) => void;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ProductList: React.FC<Props> = ({ addToCart }) => {
  return (
    <Grid>
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </Grid>
  );
};

export default ProductList;
