// Parent class
class Animal {
    constructor(public name: string) {}
    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}
class Dog extends Animal {
    speak(): void {
        console.log(`${this.name} barks.`);
    }
}
class Cat extends Animal {
    speak(): void {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.

const cat = new Cat("Whiskers");
cat.speak(); // Output: Whiskers meows.
