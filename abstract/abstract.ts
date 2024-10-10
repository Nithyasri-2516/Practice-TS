// abstract class in TypeScript (and other object-oriented programming languages) is a class that cannot be 
// instantiated on its own and is intended to be subclassed. It can contain both abstract methods (which must be
// implemented by subclasses) and concrete methods 
// (which have an implementation).


abstract class Animal {
    constructor(public name: string) {}
    abstract sound(): void; // Abstract method
    eat() {
        console.log(`${this.name} is eating.`);
    }
}
class Dog extends Animal {
    sound() {
        console.log("Woof!");
    }   
}
class Cat extends Animal {
    sound() {
        console.log("Meow!");
    }
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
dog.eat();      
dog.sound();    
cat.eat();     
cat.sound();    

