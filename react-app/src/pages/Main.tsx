import React, { useState } from 'react';
import CardList from '../components/ProductsList';
import CustomInput from '../components/SearchInput';
import { CartItem } from '../types';
import { data } from '../db.js';

const Main = () => {
  const [items] = useState<CartItem[]>(data.products);

  return (
    <div className="main">
      <div className="container">
        <div className="main__inner">
          <h1>Main</h1>
          <CustomInput />
          <CardList items={items} />
        </div>
      </div>
    </div>
  );
};

export default Main;
