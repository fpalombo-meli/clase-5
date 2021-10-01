let object = { objeto: "de ejemplo" };

console.log(object.__proto__);
console.log(Object.getPrototypeOf(object));

let myMap = new Map([
  [0, "zero"],
  [1, "one"],
]);

// Phase 2
// console.log(myMap.constructor.name);
// Object.setPrototypeOf(myMap, Array);

// console.log(myMap.constructor.name);
