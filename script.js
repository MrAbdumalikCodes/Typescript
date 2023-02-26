"use strict";
class User {
    constructor(id, name, age, job) {
        this.id = id;
        this.fullName = name;
        this.age = age;
        this.job = job;
    }
    set firstName(firstName) {
        this.fullName = firstName;
    }
}
class Student extends User {
    some() {
        super.fullName;
    }
}
let alex = new User(1, 'Alex Smith', 25, 'Software Enginer');
alex.firstName = 'Johny Cage';
console.log(alex);
