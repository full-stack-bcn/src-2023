class Person {
  firstName: string;
  lastName: string;

  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(newValue: string) {
    const parts = newValue.split(' ');
    console.log(parts);
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

let p = new Person("James", "Bond");
console.log(p.fullName);
p.fullName = "Pepito Bond";
console.log(p.fullName);

