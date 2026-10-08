
/*
    Días de semana abrimos a las 11
    fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy

const dia = 5;
const horaActual = 8;

let horaApertura;
let mensaje; // Está abierto o Está cerrado, hoy abrimos xx


console.log('\n %c Sin operadores ternarios', 'color:#b2ffff;font-wight: bold');

// if( dia === 0 || dia === 6){
if( [0,6].includes( dia ) ){ // Preguntar si existe el valor dia dentro del arreglo
    console.log('Es fin de semana');
    horaApertura = 9;
} else {
    console.log('Es día de semana');
    horaApertura = 11;
}

if( horaActual >= horaApertura){
    mensaje = 'Está abierto';
} else {
    mensaje = `Está cerrado, hoy abrimos a las:  ${horaApertura}`;
}

console.log({horaApertura});

console.log('\n %c Usando operador ternario', 'color:#b2ffff;font-wight: bold');

horaActual >= horaApertura  ? 'Esta Abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});
