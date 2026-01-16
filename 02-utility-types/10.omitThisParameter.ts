/**
 * ======================================================
 * Topic: `OmitThisParameter` Utility Type
 * ======================================================
 *
 * `OmitThisParameter<T>` removes the `this` parameter from
 * a function type, producing a regular function type
 * that does not require `this` when called.
 *
 * Useful when you want to **call functions without worrying about `this`**.
 */

/** Original function type with `this` */
type OriginalFuncType = (this: { value: number }, increment: number) => void;

/**
 * Remove the `this` parameter
 * Now the function expects only the arguments, not `this`.
 */
type NewFuncType = OmitThisParameter<OriginalFuncType>;

/** ✅ Correct implementation of the function */
const incrementValue: NewFuncType = function (increment: number) {
  // Inside the function, `this` is not typed
  // So we cannot rely on `this.value` safely here
  // Instead, we should access the context explicitly via .call/.apply
  return increment; // placeholder, logic handled via call/apply
};

/** Context object */
const context = { value: 5 };


/**
 * ======================================================
 * Correct Approach:
 *
 * When using OmitThisParameter, the function type no longer
 * has a `this` parameter, so your function implementation
 * **should NOT declare `this`**. The context must be passed explicitly.
 */
function incrementValueFixed(context: { value: number }, increment: number) {
  context.value += increment;
}

const ctx = { value: 5 };
incrementValueFixed(ctx, 3);
console.log(ctx); // { value: 8 }
