import React from 'react';
import { CartItem } from '../types/CartItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Container = styled.main`
  padding: 2rem;
`;

const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

const Item = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const Total = styled.h2`
  margin-top: 2rem;
`;

const RemoveButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #dc2626;
  }
`;

const CheckoutButton = styled.button`
margin-top: 1rem;
background: #10b981;
color: white;
border: none;
padding: 0.75rem 1.5rem;
border-radius: 8px;
cursor: pointer;

&:hover {
  background: #059669;
}
`;


const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  color: #4f46e5;

  &:hover {
    text-decoration: underline;
  }
`;

const CartPage: React.FC<Props> = ({ cart, setCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeItem = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Title>Корзина</Title>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        cart.map(item => (
          <Item key={item.id}>
            <ItemDetails>
              {item.name} × {item.quantity} — {item.price * item.quantity} ₽
            </ItemDetails>
            <RemoveButton onClick={() => removeItem(item.id)}>Удалить</RemoveButton>
          </Item>
        ))
      )}
      <Total>Итого: {total} ₽</Total>
      
      {cart.length > 0 && (
  <Link to="/checkout">
    <CheckoutButton>Перейти к оформлению</CheckoutButton>
  </Link>
)}

      <BackLink to="/">← Вернуться в каталог</BackLink>
    </Container>
  );
};

export default CartPage;
