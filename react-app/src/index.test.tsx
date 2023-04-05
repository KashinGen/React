import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import Card from './components/ProductCard';
import CardList from './components/ProductsList';
import { INSTOCK, PayMethod } from './types';
import Form from './components/Form';
import About from './pages/About';
import FormPage from './pages/Form';

describe('Pages', () => {
  it('render About', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About');
  });
  it('render Form Page', () => {
    render(
      <MemoryRouter>
        <FormPage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Form');
  });
});
describe('App', () => {
  it('render App', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const app = screen.getByTestId(/app/i);
    expect(app).toBeInTheDocument();
  });
  it('render not found page', () => {
    render(
      <MemoryRouter initialEntries={['/some']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});

describe('render one Card', () => {
  const card = {
    id: '1',
    title: 'iPhone 9',
    price: 549,
    rating: 4.69,
    in_stock: INSTOCK.YES,
    brand: 'Apple',
    pay_method: [PayMethod.CARD],
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  };
  beforeEach(() => {
    render(<Card key={card.id} cartItem={card} />);
  });
  it('renders card with title', () => {
    expect(screen.getByText(/iPhone 9/)).toBeInTheDocument();
  });

  it('renders card with price', () => {
    expect(screen.getByText(/549/)).toBeInTheDocument();
  });

  it('renders card with category', () => {
    expect(screen.getByText(/smartphones/)).toBeInTheDocument();
  });
  it('renders card with brand', () => {
    expect(screen.getByText(/Apple/)).toBeInTheDocument();
  });
});

describe('render two cards', () => {
  const cards = [
    {
      id: '1',
      title: 'iPhone 9',
      price: 549,
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
      rating: 4.69,
      in_stock: INSTOCK.YES,
      brand: 'OPPO',
      pay_method: [PayMethod.CASH],
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    },
  ];
  beforeEach(() => {});
  it('renders card with title', () => {
    render(<CardList items={cards} />);
    expect(screen.getByText(/iPhone 9/)).toBeInTheDocument();
    expect(screen.getByText(/OPPO 19/)).toBeInTheDocument();
  });
});

describe('Create', () => {
  it('renders Form component', () => {
    render(<Form onSubmit={() => {}} />);

    expect(screen.getByText(/Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Rating/i)).toBeInTheDocument();
    expect(screen.getByText(/Date/i)).toBeInTheDocument();
    expect(screen.getByText(/Price/i)).toBeInTheDocument();
    expect(screen.getByText(/In stock/i)).toBeInTheDocument();
    expect(screen.getByText(/Pay method/i)).toBeInTheDocument();
    expect(screen.getByText(/Brand/i)).toBeInTheDocument();
    expect(screen.getByText(/Category/i)).toBeInTheDocument();
    expect(screen.getByText(/Image/i)).toBeInTheDocument();
  });
});
