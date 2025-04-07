import React from 'react';
import ProductList from '../components/ProductList';
import { CartItem } from '../types/CartItem';

interface Props {
  addToCart: (product: CartItem) => void;
}

const HomePage: React.FC<Props> = ({ addToCart }) => {
  return (
    <main style={{ padding: '1rem' }}>
      <h1>Каталог товаров</h1>
      <ProductList addToCart={addToCart} />
    </main>
  );
};

export default HomePage;
