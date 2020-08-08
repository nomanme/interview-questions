class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero', 'Noman', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Zero', 30000);
console.log(friendlyPerson);

function person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new person1('Grand', 'Papa', 1200);
console.log(oldPerson);