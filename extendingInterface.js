// using extends keyword
var student = /** @class */ (function () {
    function student() {
        this.name = "nithya";
        this.age = 20;
        this.class = "10thstd";
    }
    return student;
}());
var Student = new student();
console.log(Student.class);
