import React from 'react';
import CardList from '../components/CardList';
import CustomInput from '../components/CustomInput';
import { CartItem, ProductsResponse } from '../types';

interface State {
  items: CartItem[];
}

class Main extends React.Component<Record<string, never>, State> {
  state: State = {
    items: [],
  };

  async componentDidMount() {
    const resp = await fetch('src/db.json');
    const data: ProductsResponse = await resp.json();
    if (data.products) {
      this.setState({
        ...this.state,
        items: data.products,
      });
    }
  }

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
