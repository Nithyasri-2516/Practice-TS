// 1. Type Annotation
let n: string = "Alice";
console.log(n); // Output: Alice

// 2. Number
let age: number = 30;
console.log(age); // Output: 30

// 3. String
let greeting: string = "Hello, world!";
console.log(greeting); // Output: Hello, world!

// 4. Boolean
let isActive: boolean = true;
console.log(isActive); // Output: true

// 5. Object Type
let person: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
console.log(person); // Output: { name: 'Alice', age: 30 }

// 6. Array
let scores: number[] = [85, 90, 78];
console.log(scores); // Output: [ 85, 90, 78 ]

// 7. Tuple
let coordinates: [number, number] = [10, 20];
console.log(coordinates); // Output: [ 10, 20 ]

// 8. Enum
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Green;
console.log(favoriteColor); // Output: 1 (Green)

// 9. Any Type
let randomValue: any = "Could be anything";
randomValue = 42;
console.log(randomValue); // Output: 42

// 10. Void Type
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Logging a message."); // Output: Logging a message.

// 11. Never Type
function throwError(message: string): never {
    throw new Error(message);
}
// Uncommenting the following line will throw an error
// throwError("This is an error."); // Output: Uncaught Error: This is an error.

// 12. Union Types
let id: string | number = "123";
console.log(id); // Output: 123
id = 456;
console.log(id); // Output: 456

// 13. Type Aliases
type StringOrNumber = string | number;
let value: StringOrNumber = "Hello";
console.log(value); // Output: Hello

// 14. String Literal Types
type Direction = "left" | "right" | "up" | "down";
let move: Direction = "left";
console.log(move); // Output: left

// 15. Type Inference
let inferredString = "This is inferred";
console.log(inferredString); // Output: This is inferred
