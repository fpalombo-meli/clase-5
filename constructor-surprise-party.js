// Base
let regalos_infantiles = {
  cumpleañero: "Jorgelin",
  golosinas: ["chupetin", "chicles", "alfajores"],
  juguetes: ["yoyo", "slime", "pelota"],
  fiesta: function () {
    console.log("Todos gritan: ¡Sorpresa!");
  },
  saludarCumpleañero: function () {
    console.log(`Hola ${this.cumpleañero}, feliz cumpleaños!`);
  },
};

// Phase 1

// console.log("------------------\n");
// console.log("Regalos como objeto simple:", "\n", regalos_infantiles);
// console.log("------------------\n");

// Podemos extraer al método constructor FiestaSorpresa:

const FiestaSorpresa = function (cumpleañero) {
  this.cumpleañero = cumpleañero;

  this.fiesta = function () {
    console.log("Todos gritan: ¡Sorpresa!");
  };

  this.saludarCumpleañero = function () {
    console.log(`Hola ${this.cumpleañero}, feliz cumpleaños!`);
  };
};

// Ir a la sheet 19 para ver la palabra new.
// regalos_infantiles = new FiestaSorpresa("Jorgito");

// Phase 2

// console.log("|-||-||-||-||-||-|\n");
// console.log("------------------\n");

// console.log("Regalos infantiles creados a partir de un constructor: \n");
// console.log(regalos_infantiles);
// regalos_infantiles.saludarCumpleañero();

// Phase 3
// instanceof, es un operador, que verifica,
// de izquierda a derecha, si el elemento es
// una instancia de la funcion constructora dada...
// Ej: (let obj = {}; obj instanceof Object;) daría como output: true.

console.log("==========");
console.log(
  "Chequeamos la instancia de regalos infantiles",
  regalos_infantiles instanceof FiestaSorpresa,
  " para ",
  regalos_infantiles.constructor.name
);

// console.log("Chequeamos los tipos: ");

// console.log(`typeof regalos_infantiles: ${typeof regalos_infantiles}`);
