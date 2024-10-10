var Employee = /** @class */ (function () {
    function Employee(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Employee.prototype.display = function () {
        var _a;
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Age: ").concat((_a = this.age) !== null && _a !== void 0 ? _a : 'not provided', " "));
    };
    return Employee;
}());
var emp1 = new Employee(1, 'nithu', 30);
emp1.display();
var emp2 = new Employee(2, 'pandi');
emp2.display();
