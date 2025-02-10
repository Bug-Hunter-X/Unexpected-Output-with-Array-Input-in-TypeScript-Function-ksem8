# Unexpected Output with Array Input in TypeScript Function

This example demonstrates a common error in TypeScript where a function expects a string input but receives an array instead.  The unexpected output arises from the implicit type coercion performed by JavaScript.  The solution shows how to prevent this issue using TypeScript's type system.

## Bug

The `greeter` function is designed to greet a person by name. However, when it receives an array, it concatenates the array elements as strings, leading to an unexpected result.

## Solution

The solution uses type annotations to explicitly define the expected input type of the `greeter` function.  This enforces type safety and prevents unexpected behavior when incorrect input is provided.  Additionally, error handling is implemented to manage scenarios where the input is not a string.