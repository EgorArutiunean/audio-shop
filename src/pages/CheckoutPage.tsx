import React from 'react';
import styled from 'styled-components';
import { CartItem } from '../types/CartItem';
import { useNavigate } from 'react-router-dom';

interface Props {
  cart: CartItem[];
  clearCart: () => void;
}

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
`;

const Field = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #4338ca;
  }
`;

const CheckoutPage: React.FC<Props> = ({ cart, clearCart }) => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Заказ оформлен!');
    clearCart();
    navigate('/');
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Container>
      <h1>Оформление заказа</h1>
      <form onSubmit={handleSubmit}>
        <Field type="text" placeholder="Ваше имя" required />
        <Field type="email" placeholder="Email" required />
        <Field type="tel" placeholder="Телефон" required />
        <Field type="text" placeholder="Адрес доставки" required />

        <h3>Ваш заказ:</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} × {item.quantity} — {item.price * item.quantity} ₽
            </li>
          ))}
        </ul>
        <p><strong>Итого: {total} ₽</strong></p>

        <Button type="submit">Оформить заказ</Button>
      </form>
    </Container>
  );
};

export default CheckoutPage;
