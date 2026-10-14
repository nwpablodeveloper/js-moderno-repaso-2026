

class Persona {
    // por defecto todas las clases en javascritp tiene el 'use strict'

    static _conteo = 0;
    static get conteo (){
        return Persona._conteo + ' Instancias creadas';
    }

    static mensaje () {
        console.log(`Soy un método estatio`);
    }

    // Definición de propiedades del objeto
    nombre  = "";
    codigo  = "";
    frase   = "";
    comida   = "";
    

    // El constructor siempre retorna la instancia del objeto
    constructor(nombre, codigo = 'sin código', frase){

        Persona._conteo++;
        console.log(Persona.conteo);
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;
    }

    set setComidaFavorita( comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita () {
        return `La comida favorita de ${ this.nombre } es ${ this.comida}`;
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

console.log(`\n`);
console.log(spiderman2);
spiderman2.setComidaFavorita = 'El pie de cereza de la tía May';
console.log(spiderman2.getComidaFavorita);
console.log(spiderman2);

// Persona._conteo = 2;
// console.log(Persona._conteo);

Persona.mensaje();

Persona.propiedadEstaticaExterna = 'Esto es la creación de una propiedad estática externa';
console.log(Persona.propiedadEstaticaExterna);
console.log(Persona);
