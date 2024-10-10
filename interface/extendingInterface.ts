// using extends keyword


interface student_details{
    name: string;
    age: number;
}

interface student_educationalDetails extends student_details{
    class: string;
    rollNumber: string;
}

class student implements student_educationalDetails{
    name="nithya";
    age=20;
    class="10thstd";
    rollNumber: "21ucs009";
}
const Student = new student();
console.log(Student.class);
