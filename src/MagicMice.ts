import { Product } from "./Product";


const Mice_Price = 300;

export class MagicMice implements Product {
    getPrice(): number {
        return Mice_Price;
    }
}