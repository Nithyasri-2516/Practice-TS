// interface is a syntactical contract that defines the structure of an object. It specifies the properties
// and methods that an object should have, allowing for type-checking
var employee = /** @class */ (function () {
    function employee(name, age) {
        this.name = name;
        this.age = age;
    }
    /*
     constructor(public name: string, public age: number) {
        // Properties are automatically declared and initialized
    }
    */
    employee.prototype.display = function () {
        console.log("the name is ".concat(this.name));
    };
    return employee;
}());
var Employee = new employee("nithu", 90);
Employee.display();
