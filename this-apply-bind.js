// Ahora, podemos seguir teniendo funciones que tengan un contexto propio.
// Y así poder tener funciones que puedan ser ejecutadas con ese contexto parametrizable.
// Esto lo podemos hacer gracias a los metodos que tenemos dentro del prototipo de funciones.
// Los metodos son call, apply y bind.
// Ahora, los 3 funcionan distinto.

function regalar(regalo) {
  console.log(`Hola ${this.nombre} te regalo un ${regalo}`);
}

// Call, llama a la funcion con el this primero y los parametros asignados por coma

// regalar.call({ nombre: "Maxi" }, "cartucho de pokemon red");

// Apply, llama a la funcion con el this primero y los parametros asignados como un array
// regalar.apply({ nombre: "Esteban" }, ["vinito"]);⁄

// bind nos crea una funcion nueva que tiene el this attacheado a la misma,
// gracias a eso, podemos luego llamar a esta función con el contexto bindeado

const regalarAFacu = regalar.bind({ nombre: "Facundo" });

// regalarAFacu("violento");

// También podemos guardar por ejemplo, unos valores en un principio,
// y seguir enviando parametros con bind, esto se llama currying.

function regalarMucho(regalo1, regalo2) {
  console.log(`Hola ${this.nombre} te regalo ${regalo1} ${regalo2}`);
}

const regalarADio = regalarMucho.bind({ nombre: "Dio" }, "muffin");
// regalarADio();
regalarADio("una camiseta de bokita");
