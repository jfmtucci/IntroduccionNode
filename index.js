import { registrar, leer } from "./operaciones.js";

const operacion = process.argv[2];
const argumentos = process.argv.slice(3);

const nombreDelAnimal = argumentos[0];
const edad = argumentos[1];
const tipoDeAnimal = argumentos[2];
const colorDelAnimal = argumentos[3];
const enfermedad = argumentos[4];

console.log(argumentos);

if (operacion === "registrar") {
  const cita = {
    nombreDelAnimal,
    edad,
    tipoDeAnimal,
    colorDelAnimal,
    enfermedad,
  };
  registrar(JSON.stringify(cita));
}
if (operacion === "leer") {
  leer();
}

// "Simba" "10 Años" "Perro" "Dorado" "Cancer"
// "Firulais" "5 Años" "Perro" "Marrón" "Gripe"
