let student = {
  name: "Akshaya",
  age: 15,
  grade: "10",
  show: function() {
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    console.log("Grade: " + this.grade);
  }
};

student.show();

student.age = 16;
student.grade = "11";

console.log("New Age: " + student.age);
console.log("New Grade: " + student.grade);

console.log("Student Name: " + student.name);
console.log("Student Grade: " + student["grade"]);

student.school = "CMS School";

student.showSchool = function() {
  console.log("School: " + this.school);
};

student.showSchool();