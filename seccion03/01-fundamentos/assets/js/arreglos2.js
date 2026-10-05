let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo', juegos.length);

console.log('Primer elemento: ', juegos[0]);
console.log('Último elemento: ', juegos[juegos.length - 1]);

console.log('\n');

// Recorrer el arreglo
juegos.forEach( (elemento, indice, arr) => {
    console.log(elemento, indice, arr)
});

console.log('\n');

// Insertar elemento al final del arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({ nuevaLongitud, juegos });

console.log('\n');
// Insertar un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

console.log('\n');
// // Borrar el último elemento
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

console.log('\n');
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

console.log('\n');

console.log(juegos);
let metroiIndex = juegos.indexOf('Metroid');
console.log({metroiIndex});