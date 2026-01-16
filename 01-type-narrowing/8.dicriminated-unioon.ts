/**
 * Demonstrates Type Narrowing Using Discriminated Unions
 *
 * Discriminated unions allow TypeScript to narrow types based on
 * a common literal property (the "discriminant").
 *
 * Using a switch statement on the discriminant property makes
 * type narrowing clean, readable, and maintainable.
 */

interface Circle {
  kind: 'Circle'; // Discriminant
  radius: number;
}

interface Square {
  kind: 'Square'; // Discriminant
  sideLength: number;
}

type Shape = Circle | Square;


function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case 'Circle':
      return Math.PI * shape.radius ** 2;

    case 'Square':
      return shape.sideLength ** 2;

    default:
      // Exhaustive check: ensures all possible cases are handled
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

const myCircle: Circle = { kind: 'Circle', radius: 5 };
const mySquare: Square = { kind: 'Square', sideLength: 10 };

console.log(calculateArea(myCircle)); 
console.log(calculateArea(mySquare)); 
