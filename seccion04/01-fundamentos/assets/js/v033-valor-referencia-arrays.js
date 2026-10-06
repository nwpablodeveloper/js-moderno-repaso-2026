console.log('\n %c Array frutas', 'color:#b2ffff;font-wight: bold');
const frutas = ['frutilla', 'anana', 'pera'];
console.log(frutas);

console.log('\n %c Array otras frutasfrutas', 'color:#b2ffff;font-wight: bold');
const otrasFrutas = frutas;
otrasFrutas.push('Manzana');
console.log(otrasFrutas);

console.log('\n %c Arrays', 'color:#b2ffff;font-wight: bold');
console.table({frutas, otrasFrutas});

console.log('\n %c Arrays rompiendo referencia', 'color:#b2ffff;font-wight: bold');
let frutas4 = frutas.slice(); // Corta el arreglo y regresa uno nuevo frutas.slice(2,5);
frutas4.pop();
let frutas3 = [...frutas];
frutas3.push('kiwi');

console.table({frutas, otrasFrutas, frutas3, frutas4});

console.log('\n %c Cual de las 2 maneras es mas eficiente para romper una referencia?', 'color:#b2ffff;font-wight: bold');
console.time('slice');
let frutas5 = frutas.slice();
console.timeEnd('slice');
frutas5.push('banana');

console.time('spread');
let frutas6 = [ ...frutas];
console.timeEnd('spread');
frutas6.pop();
frutas6.pop();
console.table({frutas, otrasFrutas, frutas3, frutas4, frutas5, frutas6});
