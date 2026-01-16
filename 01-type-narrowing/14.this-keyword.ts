/**
 * Demonstrate `this` Context and Caller Behavior
 *
 * In JavaScript/TypeScript, the value of `this` is determined
 * by how a function is called, not where it is defined.
 *
 * TypeScript allows us to explicitly type `this` in a method
 * to prevent incorrect usage.
 */

class Book {
  price: number;
  numberSold: number;

  constructor(price: number, numberSold: number) {
    this.price = price;
    this.numberSold = numberSold;
  }

  /**
   * Regular method with an explicit `this` parameter.
   *
   * `this: Book` ensures the method is always called
   * with a `Book` instance as its context.
   */
  getRevenue(this: Book): number {
    return this.price * this.numberSold;
  }

  /**
   * Arrow function method.
   *
   * Arrow functions do NOT have their own `this`.
   * They inherit `this` from the surrounding lexical scope,
   * which makes them safe to pass around without binding.
   */
  getRevenueArrow = (): number => {
    return this.price * this.numberSold;
  };
}

const bookInstance = new Book(100, 20);

/**
 * Works normally because the method is called
 * with `bookInstance` as the caller context.
 */
console.log(bookInstance.getRevenue()); // 2000

/**
 * ❌ Problem:
 * Extracting a regular method loses the `this` context.
 */
const getRevenue = bookInstance.getRevenue;

// getRevenue(); // ❌ Runtime error: `this` is undefined

/**
 * ✅ Solution:
 * Bind the method explicitly to the instance.
 */
const boundGetRevenue = bookInstance.getRevenue.bind(bookInstance);
console.log(boundGetRevenue()); // 2000

/**
 * ✅ Arrow functions automatically preserve `this`,
 * so no binding is required.
 */
const getRevenueArrow = bookInstance.getRevenueArrow;
console.log(getRevenueArrow()); // 2000
