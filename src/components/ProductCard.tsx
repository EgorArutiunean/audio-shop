import React, { useState } from 'react';
import { Product } from '../types/Product';
import { CartItem } from '../types/CartItem';
import Modal from './Modal';
import styled from 'styled-components';

interface Props {
  product: Product;
  addToCart: (product: CartItem) => void;
}

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 300px;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Name = styled.h3`
  margin: 0.5rem 0 0.2rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const Price = styled.strong`
  margin: 0.5rem 0;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: #4f46e5;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #4338ca;
  }
`;

const ProductCard: React.FC<Props> = ({ product, addToCart }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <Price>{product.price} ₽</Price>
      <ButtonRow>
        <Button onClick={() => addToCart({ ...product, quantity: 1 })}>Купить</Button>
        <Button onClick={() => setShowModal(true)}>Подробнее</Button>
      </ButtonRow>
      {showModal && <Modal product={product} onClose={() => setShowModal(false)} />}
    </Card>
  );
};

export default ProductCard;
