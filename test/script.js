// // Create a class named `Student` having firstname, lastname, age and subjects properties,
// with subjects being an array which is initially empty - Initialise firstName, lastName and age during
// object declaration using a parameterised constructor -
//  Create a function which lets you add subjects to a student object, and throws error if the subject name is not a string

class Student {
  constructor(firstname, lastname, age) {
    (this.firstname = firstname),
      (this.lastname = lastname),
      (this.age = age),
      (subjects = []);
  }
  addSubjects(subject) {
    if (typeof subject === "string") {
      this.subjects.push(subject);
    } else {
      console.log("the subject should be a string");
    }
  }
}

const student = new Student("shubham", "joshi", 21);
student.addSubjects("maths");
student.addSubjects(123);

console.log(student.addSubjects("maths"));
console.log(student.addSubjects(123));
