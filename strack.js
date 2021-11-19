// Last In First Out => LIFO

class Stack {
  constructor() {
    this.stack = [];
  }
  add(element) {
    this.stack.push(element);
  }
  remove() {
    return this.stack.pop();
  }
}

const plates = new Stack();
plates.add("Abul");
plates.add("Babul");
plates.add("Cabul");
plates.add("Ebul");

console.log(plates.stack);

plates.remove();
console.log(plates.stack);

plates.remove();
console.log(plates.stack);

plates.remove();
console.log(plates.stack);

plates.remove();
console.log(plates.stack);
