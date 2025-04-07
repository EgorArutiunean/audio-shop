import React from 'react';
import { Product } from '../types/Product';
import styled from 'styled-components';

interface Props {
  product: Product;
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-top: 1rem;
`;

const Description = styled.p`
  color: #555;
`;

const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #888;
  cursor: pointer;

  &:hover {
    color: #111;
  }
`;

const Modal: React.FC<Props> = ({ product, onClose }) => {
  return (
    <Overlay>
      <ModalBox>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalImage src={product.image} alt={product.name} />
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>{product.price} ₽</Price>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;
