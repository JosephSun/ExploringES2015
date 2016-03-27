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
