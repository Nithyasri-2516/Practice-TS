// 1. Type Annotation
var n = "Alice";
console.log(n); // Output: Alice
// 2. Number
var age = 30;
console.log(age); // Output: 30
// 3. String
var greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!
// 4. Boolean
var isActive = true;
console.log(isActive); // Output: true
// 5. Object Type
var person = {
    name: "Alice",
    age: 30
};
console.log(person); // Output: { name: 'Alice', age: 30 }
// 6. Array
var scores = [85, 90, 78];
console.log(scores); // Output: [ 85, 90, 78 ]
// 7. Tuple
var coordinates = [10, 20];
console.log(coordinates); // Output: [ 10, 20 ]
// 8. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var favoriteColor = Color.Green;
console.log(favoriteColor); // Output: 1 (Green)
// 9. Any Type
var randomValue = "Could be anything";
randomValue = 42;
console.log(randomValue); // Output: 42
// 10. Void Type
function logMessage(message) {
    console.log(message);
}
logMessage("Logging a message."); // Output: Logging a message.
// 11. Never Type
function throwError(message) {
    throw new Error(message);
}
// Uncommenting the following line will throw an error
// throwError("This is an error."); // Output: Uncaught Error: This is an error.
// 12. Union Types
var id = "123";
console.log(id); // Output: 123
id = 456;
console.log(id); // Output: 456
var value = "Hello";
console.log(value); // Output: Hello
var move = "left";
console.log(move); // Output: left
// 15. Type Inference
var inferredString = "This is inferred";
console.log(inferredString); // Output: This is inferred
