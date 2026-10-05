let nombre = 'Peter parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
nombre = `Tía May`;


// Saber cual es el tipo de variable
console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);


console.log(`Tipos booleanos`);
let esMarvel = false;
console.log(typeof esMarvel);

console.log(`Tipos de numeros`);
let edad = 38;
console.log(typeof edad);

let soyUndefined;
console.log(typeof soyUndefined); // esto es undefined

let soyNull = null;
console.log(typeof soyNull); // Es considerado como un objeto

let soyDatoSymbol1 = Symbol('a');
console.log(typeof soyDatoSymbol1);

let soyDatoSymbol2 = Symbol('a');
console.log(typeof soyDatoSymbol2);

console.log( soyDatoSymbol1 === soyDatoSymbol2 ); // son diferentes