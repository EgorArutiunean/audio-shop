import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  cartCount: number;
}

const HeaderWrapper = styled.header`
  background: #1f2937;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #60a5fa;
  }
`;

const CartLink = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  background: #4f46e5;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

const Header: React.FC<Props> = ({ cartCount }) => {
  return (
    <HeaderWrapper>
      <Logo to="/">🎧 AudioShop</Logo>
      <CartLink to="/cart">🛒 Корзина ({cartCount})</CartLink>
    </HeaderWrapper>
  );
};

export default Header;
