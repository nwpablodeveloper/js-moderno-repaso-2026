// Esto es un comentario

// console.log(console.log('Hola mundo en HTML')); 

/* 
let a = 10;
let b = 20;
let c = 20;
let d = 20;
let x = a + b;
 */

// declarar variables de forma multiple
let a = 10, 
    b = 20, 
    c = 'Hola ', 
    d = 'Spiderman', 
    x = a + b;

const saludo = c + d;

console.log('%c Variables', 'color:pink;font-wight: bold');
console.log('a', a);
console.log('b', b);
console.log('c', c);
console.log('\n');

console.log('%c Clasificación de mensajes', 'color:pink;font-wight: bold');
console.warn('Esto es una alerta')
console.error('Esto es una error')

console.log('\n');
console.log('%c Mis varialbes en forma de objeto', 'color:pink;font-wight: bold');
console.log({a});
console.log({b});
console.log({c});
console.log('\n');

console.log('%c Mis varialbes en forma de tabla', 'color:pink;font-wight: bold');
console.table({a,b,c,d, saludo})