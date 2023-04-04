import React, { useState } from 'react';
import Form from '../components/Form';
import ProductsList from '../components/ProductsList';
import { CartItem } from 'types';

const FormPage = () => {
  const [cards, setCards] = useState<CartItem[]>([]);

  const onSubmit = (item: CartItem) => {
    setCards([...cards, item]);
  };

  return (
    <main>
      <div className="container">
        <div className="form-page__inner">
          <h1>Form</h1>
          <Form onSubmit={onSubmit} />
          <ProductsList items={cards} />
        </div>
      </div>
    </main>
  );
};

export default FormPage;
