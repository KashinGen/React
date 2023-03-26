import React from 'react';
import CardList from '../components/ProductsList';
import CustomInput from '../components/SearchInput';
import { CartItem } from '../types';
import data from '../db.json';

interface State {
  items: CartItem[];
}

class Main extends React.Component<Record<string, never>, State> {
  state: State = {
    items: data.products,
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="main__inner">
            <h1>Main</h1>
            <CustomInput />
            <CardList items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
