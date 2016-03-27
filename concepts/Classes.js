// ES5

function Person(name) {
  this.name = name;
}

Person.prototype.describe = function () {
  return `Person called ${this.name}`;
}


// ES2015
class PersonES6 {
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
