// @ts-nocheck
/* 
const heroes0 = ['Batman', 'Superman', 'Flash', 'Aquaman'];
const heroesCopy0 = heroes0;

//* Estan referenciados ambos entre si
heroes0.sort();

console.table(heroes0);
console.table(heroesCopy0); 
 */


const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
// const heroesCopy = heroes;

const heroesCopy = heroes.toSorted();

console.table(heroes);
console.table(heroesCopy); 