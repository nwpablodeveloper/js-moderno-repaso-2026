

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

    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi entidad es: ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }
    
}

const spiderman = new Persona();
const spiderman2 = new Persona(`Peter Parker`, `Spiderman`, `Soy tu amigable vecino Spiderman`);

const ironman   = new Persona(`Tony Stark`, `Ironman`, `Yo soy Ironman`);


console.log(spiderman);

console.log(`\n`,ironman);
ironman.quienSoy();
ironman.miFrase();

console.log(`\n`,spiderman2);
spiderman2.quienSoy();
spiderman2.miFrase();