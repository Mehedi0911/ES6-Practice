class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "savar school"; // all class will get this property as its is nor declared as parameter.
    }
}

const student1 = new student(3, "riyadh");
const student2 = new student(5, "joti");

console.log(student1 , student2); //accessing all properties.
console.log(student1.id, student2.name); // accessing individual property of any class