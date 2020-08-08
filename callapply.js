const normalPerson = {
    firstName: 'Mohammad',
    lastName: 'Noman',
    salary: 12000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
};
console.log(normalPerson.firstName);
normalPerson.chargeBill(2000);
normalPerson.chargeBill(10000);
console.log(normalPerson.salary);