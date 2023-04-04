import React from 'react';
import { CartItem } from '../types';
import Card from './ProductCard';

interface ProductsListProps {
  items: CartItem[];
}

const ProductsList = ({ items }: ProductsListProps) => {
  return (
    <div className="product-list">
      {items.length > 0 && items.map((item) => <Card key={item.id} cartItem={item} />)}
    </div>
  );
};

export default ProductsList;
