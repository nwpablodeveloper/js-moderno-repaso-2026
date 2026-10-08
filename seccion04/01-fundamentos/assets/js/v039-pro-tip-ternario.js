
console.log('\n %c Pro-Tip operador ternario', 'color:#b2ffff;font-wight: bold');

const elMayor = (a,b)=>  a > b ? a : b;

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 dolares' : '10 dolares';

console.log( elMayor(15, 30) );
console.log( tieneMembresia(true));
console.log( tieneMembresia(false));


let amigo = true;
const amigosArrr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor( 10, 30),
]

console.log( amigosArrr );

console.log('\n %c Pro-Tip operador ternario anidado', 'color:#b2ffff;font-wight: bold');

const nota = 65; // A+, A, B+, B;

const grado =   nota >= 95 ? 'A+' :
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+' :
                nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C' 
                : 'F';

console.log({nota, grado});
