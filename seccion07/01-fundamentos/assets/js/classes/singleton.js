// El singleton siempre va a regresar la misma instancia de mi clase

class Singleton {

    static instancia; // Undefined
    nombre = '';

    constructor(nombre = '') {

        if( !!Singleton.instancia ) {
            // Undefined ! es true !! es false
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        return this;
    }

}

const instancia1 = new Singleton('Ironman');

console.log(`Nombre en la instancia 1 es: ${ instancia1.nombre}`);

// Ya existe un Singleton y lo va a ignorar
const instancia2 = new Singleton('Spiderman'); 
const instancia3 = new Singleton('BlackPanther'); 
const instancia4 = new Singleton('Thor'); 
console.log(`Nombre en la instancia 2 es: ${ instancia2.nombre}`);
console.log(`Nombre en la instancia 3 es: ${ instancia2.nombre}`);
console.log(`Nombre en la instancia 4 es: ${ instancia2.nombre}`);