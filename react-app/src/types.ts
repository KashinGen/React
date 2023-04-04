export interface CartItem {
  id: string;
  title: string;
  price: number;
  rating: number;
  in_stock: INSTOCK;
  pay_method: PayMethod[];
  brand: string;
  category: string;
  thumbnail: string;
  date?: Date;
}

export enum PayMethod {
  CASH = 'cash',
  CARD = 'card',
}
export enum INSTOCK {
  'YES',
  'NO',
}
export interface ProductsResponse {
  limit: number;
  products: CartItem[];
  skip: number;
  total: number;
}
