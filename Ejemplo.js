//Ejemplo usando parse

//Usamos el módulo de fs de NodeJS
const fs = require("fs");

//Usamos el método readFileSync de fs.
let datosSinFormato = fs.readFileSync("./ejemplo.json");
console.log(datosSinFormato);

//JSON.parse nos permite convertir un JSON en un objeto literal de JavaScript
let datos = JSON.parse(datosSinFormato);

//Accediendo a las propiedades del objeto para mostrarlo en consola
console.log(datos['nombre']);
console.log(datos.nombre);
console.log(datos["lenguajes"])

//Creamos una constante
const lenguajes = datos["lenguajes"]

//Creamos un for 
for (let i=0; i< lenguajes.length; i++){
    console.log(lenguajes[i])
}
//-------------------------------------------------------------------------
