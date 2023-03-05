const nombresApellidos = require("./nombres_apellidos.json");

const indiceNombre = Math.floor(Math.random() * nombresApellidos.nombres.length);
const indiceApellido = Math.floor(Math.random() * nombresApellidos.apellidos.length);

// Obteniendo los valores al azar.

const nombre = nombresApellidos.nombres[indiceNombre];
const apellido = nombresApellidos.apellidos[indiceApellido];

// Nombre completo.

const nombreCompleto = `${nombre} ${apellido}`
console.log(nombreCompleto);