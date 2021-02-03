class Parent{
    constructor(){
        this.fathersName = "rahim";
    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + " " + this.fathersName;
    }
}

const baby = new Child("karim");
const baby2 = new Child("naim");
console.log(baby.getFullName());
console.log(baby2.getFullName());