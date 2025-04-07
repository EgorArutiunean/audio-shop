import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Наушники SuperSound',
    description: 'Отличное звучание и шумоподавление.',
    image: '/assets/headphones.jpg',
    price: 2999,
  },
  {
    id: 2,
    name: 'Беспроводная колонка',
    description: 'Компактная и мощная.',
    image: '/assets/speaker.jpg',
    price: 4999,
  },
  {
    id: 3,
    name: 'Микрофон VibeMic',
    description: 'Качественный звук для стримов и записи.',
    image: '/assets/microphone.jpg',
    price: 3999,
  }
];
