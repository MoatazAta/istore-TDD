import { Product } from './Product';

const Macbook_Price = 10000;

export class Macbook implements Product {
    getPrice(): number {
      return Macbook_Price;
    }
}