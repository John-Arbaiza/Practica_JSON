//Guardando el enelace del recurso del servidor remoto
const requestURL ='https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

//Creamos un nuevo objeto XMLHttpRequest
const request = new XMLHttpRequest();

//Abrimos el request utilizando el verbo GET que signidica que queremos obtener un recurso
request.open('GET', requestURL);

//El tipo de respuesta que esperamos 
request.responseType = 'json';
request.send();

//Hacemos el import de escuadron.js
import datosEscuadron from "./escuadron.js";
import mostarHerores from "./Herores.js";

//Una vez cargada la respuesta, podemos utilizar los datos
request.onload = function(){
    const heroes  = request.response;
    datosEscuadron(heroes)
    mostarHerores(heroes);
}