/**
 * Demonstrates Exhaustive Checks in TypeScript
 *
 * Exhaustive checks ensure that all possible cases of a union type
 * are handled. This is especially useful for discriminated unions.
 *
 * TypeScript will give a compile-time error if a new case is added
 * and not handled in the switch statement.
 */

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Triangle {
  kind: 'triangle';
  base: number;
  height: number;
}

type Shape = Circle | Square | Triangle;


function getArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

    case 'square':
      return shape.sideLength ** 2;

    case 'triangle':
      return (shape.base * shape.height) / 2;

    default:
      /**
       * Exhaustive check:
       * The `never` type ensures that all cases are handled.
       * If a new shape is added to the Shape union but not handled
       * above, TypeScript will show a compile-time error here.
       */
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

const myCircle: Circle = { kind: 'circle', radius: 5 };
const mySquare: Square = { kind: 'square', sideLength: 10 };
const myTriangle: Triangle = { kind: 'triangle', base: 6, height: 4 };

console.log(getArea(myCircle));    
console.log(getArea(mySquare));    
console.log(getArea(myTriangle));  
