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

// ES2015 extends makes EmployeeES2015 a child class of PersonES2015
class EmployeeES2015 extends PersonES2015 {
  constructor(name, title) {
    super(name);
    this.title = title;
  }
  describe() {
    return `${super.describe()} (${this.title})`;
  }
}

// ES5 Export
let sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
function diag(x, y) {
    return sqrt(square(x) + square(y));
}
module.exports = {sqrt, square, diag};
// The line above would acutually have {sqrt: sqrt, square: square, diag: diag} but my linter already has es2015 rules so..


// ES2015 Export
export sqrt;
export square;
export diag;


// ES5 Import, we are assuming lib.js is where the export is.
square = require('lib').square;
diag = require('lib').diag

// ES2015 Import
import {square, diag} from 'lib';
