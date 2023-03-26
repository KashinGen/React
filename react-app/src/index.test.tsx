import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import Card from './components/ProductCard';
import CardList from './components/ProductsList';

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
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
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
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/4/1.jpg',
        'https://i.dummyjson.com/data/products/4/2.jpg',
        'https://i.dummyjson.com/data/products/4/3.jpg',
        'https://i.dummyjson.com/data/products/4/4.jpg',
        'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      ],
    },
  ];
  beforeEach(() => {});
  it('renders card with title', () => {
    render(<CardList items={cards} />);
    expect(screen.getByText(/iPhone 9/)).toBeInTheDocument();
    expect(screen.getByText(/OPPOF19/)).toBeInTheDocument();
  });
});
