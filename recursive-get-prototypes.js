/**
 *
 * @param {Object} object | takes any variable as parameter and recursively find the last constructor,
 * it always return Object because,
 * in javascript, the last constructor of all are objects.
 */
function recursivelyGetPrototypeOf(object) {
  const prototype = Object.getPrototypeOf(object);
  const uiChain = { 1: "   | \n  [ ]\n   | \n", 2: "  [ ]" };

  console.log(uiChain[1], prototype.constructor.name);
  if (prototype.constructor.name === "Object") {
    return prototype;
  } else {
    console.log(uiChain[2]);
    recursivelyGetPrototypeOf(object.__proto__);
  }
}

const string = "lalala";

console.log(`Prototype chain of ${string} 'lalala' is: \n`);

recursivelyGetPrototypeOf(string);
