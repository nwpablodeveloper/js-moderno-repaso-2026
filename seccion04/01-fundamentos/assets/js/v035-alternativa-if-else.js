let a = 10;

if( a >= 10 ){
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

const hoy = new Date();
let dia = hoy.getDay();

if( dia === 0 ) {
    console.log('Domingo');
} else if( dia === 1 ) {
    console.log('Lunes');
} else if( dia === 2 ) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo');
}

// Sin usar If Else o Switch, únicamente objetos. Imprimir el día de la semana

dia = 3;

const dias = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}

console.log(dia);
console.log( dias[dia] || 'Día no valido' );


const dias2 = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miércoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sabado - 6',
}

console.log(dia);
console.log( dias2[dia] || 'Día no valido' ); // No esjetuca la función


const dias3 = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miércoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sabado - 6',
}

console.log(dia);
console.log( dias3[dia]() || 'Día no valido' ); // Ejecuta la función

const diasArreglo = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sabado',];

console.log(dia);
console.log( diasArreglo[dia] || 'Día no valido' ); // Ejecuta la función
