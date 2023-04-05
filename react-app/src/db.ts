import { INSTOCK, PayMethod } from './types';

export const data = {
  products: [
    {
      id: '1',
      title: 'iPhone 9',
      price: 1549,
      rating: 4.69,
      in_stock: INSTOCK.YES,
      brand: 'Apple',
      pay_method: [PayMethod.CARD],
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    },
    {
      id: '2',
      title: 'OPPO 19',
      price: 549,
      rating: 3.9,
      in_stock: INSTOCK.NO,
      brand: 'OPPO',
      pay_method: [PayMethod.CASH],
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    },
  ],
  total: 0,
  skip: 0,
  limit: 100,
};
