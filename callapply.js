const normalPerson = {
    firstName: 'Mohammad',
    lastName: 'Noman',
    salary: 12000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
};

console.log(normalPerson.firstName);
normalPerson.chargeBill(2000);
normalPerson.chargeBill(10000);
console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Zero',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Double Zero',
    salary: 25000
}

normalPerson.chargeBill();
const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(2000);
heroBillCharge(3000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);

const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
friendlyBillCharge(1000);
friendlyBillCharge(2000);

normalPerson.chargeBill.call(heroPerson, 900, 90, 9);
normalPerson.chargeBill.call(heroPerson, 1000, 100, 10);
console.log(heroPerson.salary);

normalPerson.chargeBill.call(friendlyPerson, 1000, 100, 10);
console.log(friendlyPerson.salary);
console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
console.log(heroPerson.salary);