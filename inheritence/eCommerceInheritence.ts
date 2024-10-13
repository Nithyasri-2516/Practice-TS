// Base class for all products
class Product {
    constructor(public name: string, public price: number, public description: string) {}

    displayInfo(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Price: $${this.price}`);
        console.log(`Description: ${this.description}`);
    }
}

// Subclass for Electronics
class Electronics extends Product {
    constructor(name: string, price: number, description: string, public warranty: number) {
        super(name, price, description);
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Warranty: ${this.warranty} years`);
    }
}

// Subclass for Clothing
class Clothing extends Product {
    constructor(name: string, price: number, description: string, public size: string) {
        super(name, price, description);
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Size: ${this.size}`);
    }
}

// Subclass for Groceries
class Grocery extends Product {
    constructor(name: string, price: number, description: string, public expiryDate: string) {
        super(name, price, description);
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Expiry Date: ${this.expiryDate}`);
    }
}

// Usage
const laptop = new Electronics("Laptop", 999.99, "High-performance laptop", 2);
laptop.displayInfo();

const tShirt = new Clothing("T-Shirt", 19.99, "100% cotton t-shirt", "M");
tShirt.displayInfo();

const apple = new Grocery("Apple", 0.99, "Fresh apple", "2024-10-20");
apple.displayInfo();
