import { productFactory } from "./Product";

const Mac_Book = "macbook";
const Magic_Keyboard = "magicKeyboard";
const Magic_Mice = "magicMice";
const Magic_Trackpad = "magicTrackpad";

export class Store {

    checkout(productsList: string[]): number {
        const total = this.calculateTotal(productsList);
        const discount = this.calculateDiscount(productsList);
        return total - discount;
    }


    calculateDiscount(productsList: string[]): number {
        let discount = 0;
        if (productsList.includes(Magic_Trackpad) && productsList.includes(Magic_Keyboard)) {
            const productInstance = productFactory(Magic_Trackpad);
            discount += productInstance.getPrice();
        }

        if (productsList.includes(Mac_Book) && productsList.includes(Magic_Mice)) {
            const productInstance = productFactory(Magic_Mice);
            discount += productInstance.getPrice();
        }

        return discount;
    }

    calculateTotal(productsList: string[]): number {
        let total = 0;

        for (const product of productsList) {
            const productInstance = productFactory(product);
            if (productInstance)
              total += productInstance.getPrice();
          }
        return total;
    }
}