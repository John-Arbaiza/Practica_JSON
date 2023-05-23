//Ejemplo con Stringify

//Usamos el módulo de fs de NodeJS
const fs = require("fs");

//Usamos el método readFileSync de fs.
let datosSinFormato = fs.readFileSync("./ejemplo.json");

let datos = JSON.parse(datosSinFormato);

datos.direccion.ciudad ="San Salvador";

datos.lenguajes.push("HTML")

console.log(datos)

//Guardamos los cambios realizados en el archivo
fs.writeFileSync("ejemplomod.json", JSON.stringify(datos,null,4));
//Los parametros de Stringify son: los datos a convertir, una funcion para alterar el comportamiento,
//Y un numero de espacios o identificacion para el documento. sin ese 4 se veria text en una linea.
