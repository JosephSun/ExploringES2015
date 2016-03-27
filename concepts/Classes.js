// ES5

function Person(name) {
  this.name = name;
}

Person.prototype.describe = function () {
  return `Person called ${this.name}`;
}


// ES2015
class PersonES2015 {
  constructor(name) {
    this.name = name;
  }
  describe() {
    return `Person called ${this.name}`;
  }
}

// let ali = new Person('ali');

/*
Derived classes:
Subclassing is complicated in ES5, especially referring to
super-constructors and super-properties. This is the
canonical way of creating a sub-constructor of Person,
Employee:
*/

function Employee(name, title) {
  Person.call(this, name); // super(name)
  this.title = title;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function (){
  // super.describe()
  return `${Person.prototype.describe.call(this)} (${this.title})`;
}

// ES2015
class EmployeeES2015 extends PersonES2015 {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
  describe() {
    return `${super.describe()} (${this.title})`;
  }
}
