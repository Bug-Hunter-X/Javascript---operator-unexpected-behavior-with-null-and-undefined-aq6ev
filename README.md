# Javascript + operator unexpected behavior with null and undefined
This repository contains a JavaScript code example that demonstrates the unexpected behavior of the + operator when used with null and undefined values.

The `+` operator in JavaScript behaves differently when used with null and undefined values than one might expect. When adding null to a number, the result is the number. When adding undefined to a number, the result is NaN.  When adding null and undefined together the result is NaN. When adding null to null the result is 0. When adding undefined to undefined the result is NaN. 

The solution shows how to handle these cases to prevent unexpected behavior. 