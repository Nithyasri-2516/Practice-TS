// interface is a syntactical contract that defines the structure of an object. It specifies the properties
// and methods that an object should have, allowing for type-checking

/*  why use interface? 
   
1.Code Readability: They improve code clarity by defining clear contracts for what an object should look like, 
making it easier for developers to understand and maintain the code.

2.Modularity: Interfaces promote modular design by allowing different parts of the code to communicate through 
defined structures, facilitating easier updates and changes.

3.Multiple Implementations: A class can implement multiple interfaces, allowing for flexible designs and promoting
code reuse.

4.Type Safety: Interfaces provide a way to enforce type checking, reducing runtime errors by ensuring
that objects conform to expected structures.
*/

// Interface-syntax

interface person{
    name: string;
    age: number;
    display(): void;
}
class employee implements person {
    name: string;
    age: number;

    constructor(name: string, age: number,  public id:number) {     //manual assignment
        this.name = name; 
        this.age = age;
       //here ,we used public keyword for printing extra property without declare the property in interface 
    }
    /*
     constructor(public name: string, public age: number) {
        // Properties are automatically declared and initialized
    }
    */
    display() {
        console.log(`the name is ${this.name}`);
    }
}
const Employee = new employee("nithu", 90,2234); 
Employee.display();

