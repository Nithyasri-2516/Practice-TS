interface Person {
    readonly id: number;  // This property is readonly, meaning it cannot be changed after being assigned
    name: string;         // Regular property, can be modified
    age?: number;         // This property is optional, meaning it may or may not be provided
}
class Employee implements Person {
    readonly id: number;
    name: string;
    age?: number; //optional

    constructor(id: number, name: string, age?: number) {
        this.id = id;    
        this.name = name;
        this.age = age;    
    }

    display(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age ?? 'not provided'} `);
    }
}
const emp1 = new Employee(1, 'nithu', 30);
emp1.display(); 
const emp2 = new Employee(2, 'pandi');
emp2.display(); 
