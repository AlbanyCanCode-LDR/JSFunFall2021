import { expect } from "chai";

import { changeEmail } from "../../exercises/07-cloning-objects/01-change-email.js";
import { addToCart } from "../../exercises/07-cloning-objects/02-add-to-cart.js";

describe("7. Cloning Objects", () => {
  describe("01-change-email", () => {
    const user = {
      id: 1234,
      username: "lolcatz1",
      email: "lolcatz1@gmail.com",
    };
    const newUser = changeEmail(user, "purrfect@gmail.com");

    it("should change the email property", () => {
      expect(newUser).to.deep.equal({
        id: 1234,
        username: "lolcatz1",
        email: "purrfect@gmail.com",
      });
    });
    it("should shallow copy", () => {
      user.email = "icanhascheeseburger@yahoo.com";
      expect(newUser.email).to.equal("purrfect@gmail.com");
    });
    it("should use the spread operator", () => {
      const funcStr = changeEmail.toString();
      expect(funcStr).to.include("...");
    });
  });

  describe("02-add-to-cart", () => {
    const shoppingCart = [{ name: "TV - 20ft", price: 1000000 }];
    const newItem = { name: "Popcorn", price: 5 };
    const newShoppingCart = addToCart(shoppingCart, newItem);

    it("should add a new item to the shopping cart", () => {
      expect(newShoppingCart).to.deep.equal([
        { name: "TV - 20ft", price: 1000000 },
        { name: "Popcorn", price: 5 },
      ]);
    });
    it("should deep copy the old shopping cart", () => {
      shoppingCart[0].price = 9000000;
      expect(newShoppingCart).to.deep.equal([
        { name: "TV - 20ft", price: 1000000 },
        { name: "Popcorn", price: 5 },
      ]);
    });
    it("should deep copy the new item", () => {
      newItem.price = 10;
      expect(newShoppingCart).to.deep.equal([
        { name: "TV - 20ft", price: 1000000 },
        { name: "Popcorn", price: 5 },
      ]);
    });
  });
});
