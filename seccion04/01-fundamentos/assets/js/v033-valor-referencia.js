let a = 10;
let b = 30;
b = 40;

console.log({a, b});

let persona1 = {nombre: 'Juan'};
let persona2 = persona1;
persona2.nombre = 'Ana';

console.log(persona1);
console.log(persona2);

const cambiaNombre = ( persona ) => {
    persona.nombre = 'Tony';
    return persona;
}

const cambiaNombreRomperReferencia = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter parker'};
let tony = cambiaNombre( peter );
console.log({peter, tony});


console.log('\n %c Copiar el objeto y romper referencia', 'color:#b2ffff;font-wight: bold');
let persona3 = { ...persona1 };
persona3.nombre = 'Romina';
console.log({persona1, persona3});


console.log('\n %c Copiar el objeto y romper referencia', 'color:#b2ffff;font-wight: bold');
let peter2 = {nombre: 'Peter Parker'};
let tony2 = cambiaNombreRomperReferencia(peter2);
console.log({peter2, tony2});