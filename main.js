import { Student } from "./Student.js";
import { Course } from "./Course.js";

const student1 = new Student("Sandra");
const student2 = new Student("Torsten");

const course1 = new Course("HTML", 10);
const course2 = new Course("CSS", 50);
const course3 = new Course("Javascript", 2000);
const course4 = new Course("React", 200);

student1.registerCourse(course1);
student1.registerCourse(course3);

student2.registerCourse(course2);
student2.registerCourse(course4);

student1.listCourses();
student2.listCourses();

course1.getCourseInfo();
course2.getCourseInfo();
course3.getCourseInfo();
course4.getCourseInfo();
