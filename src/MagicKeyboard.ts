import { Product } from './Product';

const Keyboard_Price = 500;

export class MagicKeyboard implements Product {
    getPrice(): number {
      return Keyboard_Price;
    }
}