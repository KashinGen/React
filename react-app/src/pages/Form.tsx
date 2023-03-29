import React from 'react';
import Form from '../components/Form';
import ProductsList from '../components/ProductsList';
import { CartItem } from 'types';

interface FormPageState {
  cards: CartItem[];
}

class FormPage extends React.Component<Record<string, never>, FormPageState> {
  state = { cards: [] };
  onSubmit(item: CartItem) {
    console.log(item);
    const cards: CartItem[] = this.state.cards;
    cards.push(item);
    this.setState({ ...this.state, cards });
  }
  render() {
    return (
      <main>
        <div className="container">
          <div className="form-page__inner">
            <Form onSubmit={this.onSubmit.bind(this)} />
            <ProductsList items={this.state.cards} />
          </div>
        </div>
      </main>
    );
  }
}

export default FormPage;
