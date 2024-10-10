// abstract class in TypeScript (and other object-oriented programming languages) is a class that cannot be 
// instantiated on its own and is intended to be subclassed. It can contain both abstract methods (which must be
// implemented by subclasses) and concrete methods 
// (which have an implementation).
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("".concat(this.name, " is eating."));
    };
    return Animal;
}());
