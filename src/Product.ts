import { Macbook } from "./Macbook";
import { MagicKeyboard } from './MagicKeyboard';
import { MagicMice } from "./MagicMice";
import { MagicTrackpad } from "./MagicTrackpad";


export interface Product {
    getPrice: () => number;
}


export function productFactory(product: string): Product {
    if (product === ProductType.macBook) return new Macbook();
    if (product === ProductType.magicKeyboard) return new MagicKeyboard(); 
    if (product === ProductType.magicMice) return new MagicMice(); 
    if (product === ProductType.magicTrackpad) return new MagicTrackpad(); 
    throw new Error("Unknown Product!");
}

export enum ProductType {
    macBook = "macbook",
    magicKeyboard = "magicKeyboard",
    magicMice = "magicMice",
    magicTrackpad = "magicTrackpad"
}
