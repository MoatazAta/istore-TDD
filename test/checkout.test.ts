
import { Store } from "../src/checkout";

describe("checkout test", () => {

    const store = new Store();
    it("should return 0 when not sending products", () => {
        expect(store.checkout([])).toBe(0);
    }); 

    it("should return 10000 when sending an macbook", () => {
        expect(store.checkout(["macbook"])).toBe(10000);
    });

    it("should return 500 when sending a keyboard", () => {
        expect(store.checkout(["magicKeyboard"])).toBe(500);
    });

    it("should return 300 when sending a mice", () => {
        expect(store.checkout(["magicMice"])).toBe(300);
    });

    it("should return 10500 when sending twice macbook", () => {
        expect(store.checkout(["macbook", "macbook"])).toBe(20000);
    });
    
    it("should return 800 when sending an keyboard and mice", () => {
        expect(store.checkout(["magicKeyboard", "magicMice"])).toBe(800);
    });

    it("should apply discount 500 when sending an keyboard and trackpad", () => {
        expect(store.checkout(["magicKeyboard", "magicTrackpad"])).toBe(500);
    });
    
    it("shoduld throw an error when sending an unknown product", () => {
        expect(() => store.checkout(["lenovo pad"])).toThrow("Unknown Product!");
    });
});