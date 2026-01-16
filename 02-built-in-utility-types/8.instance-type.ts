/**
 * ======================================================
 * Topic: `InstanceType` Utility Type
 * ======================================================
 *
 * `InstanceType<T>` extracts the **instance type** of a class or
 * constructor function type `T`.
 *
 * Useful when:
 * - You want to refer to the type of objects created by a class
 * - Avoid manually duplicating the type of the class instance
 */

class Point {
  x = 0;
  y = 0;

  constructor(x?: number, y?: number) {
    if (x !== undefined) this.x = x;
    if (y !== undefined) this.y = y;
  }

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
}

/**
 * `InstanceType<typeof Point>` gives the type of
 * an instance of `Point`.
 */
type PointInstanceType = InstanceType<typeof Point>;

/** Example usage */
const p: PointInstanceType = new Point();
p.move(5, 10); // ✅ works
console.log(p.x, p.y); // 5, 10

/**
 * ======================================================
 * Notes
 * ======================================================
 *
 * - `InstanceType` works only on **constructor functions**
 *   or classes
 * - Avoid using `any` or non-class types with `InstanceType`
 * - Helps reduce duplication when types depend on class instances
 */
