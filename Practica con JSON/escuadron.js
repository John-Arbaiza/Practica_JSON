const datosEscuadron = (datos) => {
    //Creamos const de h1 y h2
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");

    h1.textContent = datos["squadName"];
    h1.style.textAlign = 'center';
    h2.textContent = datos["secretBase"];
    h2.style.textAlign = 'center';

    const header = document.querySelector("[data-escuadron]");

    //Agregamos los elemetos creados 
    header.appendChild(h1);
    header.appendChild(h2);

}

//hacemos el export
export default datosEscuadron;
