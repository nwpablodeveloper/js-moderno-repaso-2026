function crearPersona (nombre, apellido){
    return {
        nombre,
        apellido
    }
}

const crearPersonaFlecha = (nombre, apellido) => ({nombre, apellido});


function imprimirArgumentos (){
    console.log(arguments);
}

const imprimirArgumentosConFlecha = ( ...args ) => (args);


console.log('\n %c Creación de objeto', 'color:#b2ffff;font-wight: bold,');
const persona = crearPersona('Pablo', 'Veiga');
console.log(persona);

console.log('\n %c Usando función de flecha', 'color:#b2ffff;font-wight: bold,');
const personaFlecha = crearPersonaFlecha('Pablo', 'Veiga'); 
console.log(personaFlecha);

console.log('\n %c Recibir todos los argumentos en la función', 'color:#b2ffff;font-wight: bold,');
imprimirArgumentos(10, true, false, 'Pablo', 'Hola');

console.log('\n %c Recibir todos los argumentos en una función flecha', 'color:#b2ffff;font-wight: bold,');
const argumentosFlecha = imprimirArgumentosConFlecha(10, true, false, 'Pablo', 'Hola');
console.log({argumentosFlecha});

console.log('\n %c Destructurar variables del arreglo', 'color:#b2ffff;font-wight: bold,');
const [ edad, vivo, casado, nombre, apellido ] = imprimirArgumentosConFlecha(10, true, false, 'Pablo', 'Hola');
console.log(edad, vivo, casado);

console.log('\n %c Destructurar argumentos del objto', 'color:#b2ffff;font-wight: bold,');
const { nombre: nuevoNombre, apellido: apellido2 } = crearPersona('Pablo', 'Veiga');
console.log({nuevoNombre, apellido2});


console.log('\n %c Destructurar argumentos del objto y si alguno no viene cargar valor por defecto', 'color:#b2ffff;font-wight: bold,');
const tonyStark = {
    nombre: 'Tony Stark', 
    codeNeme: 'Ironmain',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};


const imprimePropiedads = ( {nombre, codeNeme, vivo, edad , trajes, otro = 'Otro argumento por defecto'} ) => {
    console.log({
        nombre,
        codeNeme,
        vivo,
        edad,
        trajes,
        otro,
    });
}

imprimePropiedads(tonyStark);





