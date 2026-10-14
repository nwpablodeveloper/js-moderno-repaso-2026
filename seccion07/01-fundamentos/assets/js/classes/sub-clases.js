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
    constructor(nombre = 'sin nombre', codigo = 'sin código', frase = 'sin frase'){

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

class Heroe extends Persona {
    
    clan = 'Loa Avengers';

    constructor(nombre, codigo, frase) {
        // Hay que llamar el constructor de la clase padre
        super(nombre, codigo, frase); // Super hace refencia al constructor de la siguiente clase con mas jerarquia
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${ this.clan}`);
    }

}

const spiderman1 = new Persona(`Peter Parker`, `Spiderman`, `Soy tu amigable vecino Spiderman`);
const spiderman2 = new Heroe();
console.log(spiderman1);
console.log(spiderman2);
spiderman2.quienSoy();