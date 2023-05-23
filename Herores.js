//Funcion para mostarHerores
const mostarHerores = (datos) => {
    Heroe1(datos);
    Heroe2(datos);
    Heroe3(datos);

}

const Heroe1 = (datos) => {
const firstHero = document.getElementById('PrimerHeroe')

//Elemetos a crear 
const title = document.createElement('h2');
const secondTitle = document.createElement('h2');
const edad = document.createElement('span');
const identidad = document.createElement('span');
const salto = document.createElement('br')
const contenido = document.createElement('p')

//Añadiendo los datos a los elementos creados
title.textContent = datos.members[0].name;
edad.textContent = 'Age:' + datos.members[0].age;
edad.style.fontSize = '25px';
identidad.textContent = 'Secret Identity:' + datos.members[2].secretIdentity;
identidad.style.fontSize = '25px';
secondTitle.textContent = 'Powers';
contenido.textContent = datos.members[0].powers;
contenido.style.fontSize = '25px';

//Añadiendo los elemetos
firstHero.appendChild(title);
firstHero.appendChild(edad);
firstHero.appendChild(salto)
firstHero.appendChild(identidad);
firstHero.appendChild(secondTitle);
firstHero.appendChild(contenido);
}

const Heroe2 = (datos) => {
    const secondHero = document.getElementById('SegundoHeroe')
    
    //Elemetos a crear 
    const title = document.createElement('h2');
    const secondTitle = document.createElement('h2');
    const edad = document.createElement('span');
    const identidad = document.createElement('span');
    const salto = document.createElement('br')
    const contenido = document.createElement('p')
    
    //Añadiendo los datos a los elementos creados
    title.textContent = datos.members[1].name;
    edad.textContent = 'Age:' + datos.members[1].age;
    edad.style.fontSize = '25px';
    identidad.textContent = 'Secret Identity:' + datos.members[1].secretIdentity;
    identidad.style.fontSize = '25px';
    secondTitle.textContent = 'Powers';
    contenido.textContent = datos.members[1].powers;
    contenido.style.fontSize = '25px';
    
    //Añadiendo los elemetos
    secondHero.appendChild(title);
    secondHero.appendChild(edad);
    secondHero.appendChild(salto)
    secondHero.appendChild(identidad);
    secondHero.appendChild(secondTitle);
    secondHero.appendChild(contenido);
    
    }

    const Heroe3 = (datos) => {
        const Hero3 = document.getElementById('TercerHeroe')
        
        //Elemetos a crear 
        const title = document.createElement('h2');
        const secondTitle = document.createElement('h2');
        const edad = document.createElement('span');
        const identidad = document.createElement('span');
        const salto = document.createElement('br')
        const contenido = document.createElement('p')
        
        //Añadiendo los datos a los elementos creados
        title.textContent = datos.members[2].name;
        edad.textContent = 'Age:' + datos.members[2].age;
        edad.style.fontSize = '25px';
        identidad.textContent = 'Secret Identity:' + datos.members[2].secretIdentity;
        identidad.style.fontSize = '25px';
        secondTitle.textContent = 'Powers';
        contenido.textContent = datos.members[2].powers;
        contenido.style.fontSize = '20px';
        
        //Añadiendo los elemetos
        Hero3.appendChild(title);
        Hero3.appendChild(edad);
        Hero3.appendChild(salto)
        Hero3.appendChild(identidad);
        Hero3.appendChild(secondTitle);
        Hero3.appendChild(contenido);
        
        }



export default mostarHerores;
