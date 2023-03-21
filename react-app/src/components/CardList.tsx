import React from 'react';
import { CartItem } from '../types';
import Card from './Card';

interface Props {
  items: CartItem[];
}

class CardList extends React.Component<Props, Record<string, never>> {
  state = {};
  render() {
    const { items } = this.props;
    return (
      <div className="product-list">
        {items.length > 0 && items.map((item) => <Card key={item.id} cartItem={item} />)}
      </div>
    );
  }
}

export default CardList;
