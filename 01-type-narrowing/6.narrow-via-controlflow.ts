/**
 * Demonstrates Early Return with Control Flow Type Checking
 *
 * TypeScript can use control flow analysis to narrow types
 * based on conditional checks and early returns.
 *
 * This technique helps reduce nesting and makes code cleaner.
 */


function EarlyReturnWithControlFlowTypeChecking(value: string | null): string | undefined {
  // Early return pattern: exit immediately if value is valid
  if (value !== null) {
    // TypeScript narrows value to string here
    return value.toUpperCase();
  }

  // After the early return, value must be null
  console.log(`${value} is null.`);

  // Implicitly returns undefined
}


console.log(EarlyReturnWithControlFlowTypeChecking("hello")); 
console.log(EarlyReturnWithControlFlowTypeChecking(null));   
