function foo(a, b) {
  // Handle null and undefined values explicitly
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;
  a = typeof a === 'undefined' ? 0 : a;
  b = typeof b === 'undefined' ? 0 : b;

  // Check for NaN values
  if (isNaN(a) || isNaN(b)) {
    return 0; // or throw an error or handle it appropriately
  }
  return a + b;
}

console.log(foo(2, 3)); // 5
console.log(foo(2, "3")); // 23
console.log(foo(null, undefined)); // 0
console.log(foo(undefined, null)); // 0
console.log(foo(null, null)); // 0
console.log(foo(undefined, undefined)); //0