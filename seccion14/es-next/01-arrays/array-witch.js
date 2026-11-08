
const superHeroes = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];


//* Si rompe la referencia de los valores del array pero no la de los objetos que contiene el array
// const superHeroesCopy = [...superHeroes];

//* "structuredClone()" rompe todo tipo de referencias al copiar objetos o arrays
const superHeroesCopy = structuredClone(superHeroes);


superHeroesCopy[0].name = 'Green Lantern'

console.table( superHeroes );
console.table( superHeroesCopy );