const arr = new Array(10); // No se usa mucho

console.log(arr);

const arr2 = [];
console.log(arr2);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

console.log('Primera posición:', videoJuegos[0]);


let arregloCosas = [
    true,
    1234,
    'Pablo',
    1 + 5,
    function(){},
    () => {},
    {a: 1, b: 2},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];
console.log({arregloCosas});

// Imprimir el valor de un arreglo que esta dentro de un arreglo
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);