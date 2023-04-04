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

export type FormValues = {
  title: string;
  price: string;
  rating: string;
  date: string;
  agreement: string;
  in_stock: INSTOCK;
  img: FileList;
};
