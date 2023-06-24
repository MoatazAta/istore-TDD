import { Product } from './Product';

const Trackpad_Price = 200;

export class MagicTrackpad implements Product {
    getPrice(): number {
      return Trackpad_Price;
    }
}