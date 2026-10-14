

class Persona {
    // por defecto todas las clases en javascritp tiene el 'use strict'

    // Definición de propiedades del objeto
    nombre  = "";
    codigo  = "";
    frase   = "";
    

    // El constructor siempre retorna la instancia del objeto
    constructor(nombre, codigo = 'sin código', frase){

        console.log(`Hola`);
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }
    
}

const spiderman = new Persona();
const spiderman2 = new Persona(`Peter Parker`, `DC`, `Soy tu amigable vecino Spiderman`);
const ironman   = new Persona(`Tony Stark`, `Ironman`, `Yo soy IronMan`);

console.log(spiderman);
console.log(spiderman2);
console.log(ironman);