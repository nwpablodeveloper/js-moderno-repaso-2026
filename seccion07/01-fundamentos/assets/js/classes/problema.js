
const fer = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre ${ this.nombre } - edad ${ this.edad }`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre ${ this.nombre } - edad ${ this.edad }`);
    }
}

fer.imprimir();



// Diferenciamos con la mayusculas para indicar que vamos a iniciar una instancia
function Persona (nombre, edad) { 
    console.log(`Se ejecuto esta linea`);

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre ${ this.nombre } - edad ${ this.edad }`);
    }

}

// new le indica a js que vamos a crear una nueva instancia
const maria = new Persona('Maria', 18);
maria.imprimir();

const sophia = new Persona('Sophia', 11);
sophia.imprimir();
