import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import { CartItem } from './types/CartItem';
import CheckoutPage from './pages/CheckoutPage';


const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // загрузка корзины из SessionStorage при запуске
  useEffect(() => {
    const stored = sessionStorage.getItem('cart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // сохранение корзины в SessionStorage при каждом изменении
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // добавление товара в корзину
  const addToCart = (product: CartItem) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<HomePage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<CheckoutPage cart={cart} clearCart={() => setCart([])} />} />
      </Routes>
    </div>
  );
};

export default App;
