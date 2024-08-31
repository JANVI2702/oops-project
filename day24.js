
class Shape {
  constructor(length, width) {
    console.log("Parent class");
    this.length = length;
    this.width = width;
  }
}

class Rectangle extends Shape {
  constructor() {
    super();
  }
  area() {
    return this.length;
  }
}

const rectangle1 = new Rectangle(111);

let a = rectangle1.area();
console.log(a);
