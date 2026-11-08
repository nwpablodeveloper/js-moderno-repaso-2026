// @ts-nocheck

const state = [
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
/* 
//* Indice del array que quiero reemplazar el nombre
const index = 1; 

//* Nombre a reemplazar
const newName = 'Green Lantern';

//* Forma larga con map();
//* Esta forma no rompe la referencia entre los objetos que tienen el array state y newState
const newState = state.map( (hero, i) => {

    if( i === index){
        hero.name = newName;
    }

    return hero;

});

//* Los objetos del os array aun siguen refenciados entre si
console.table( state );
console.table( newState );
 */

//* Copiar un array y poder romper la referencia de los objetos de su interior
const index = 0; 
const newName = 'Green Lantern';

const newState = state.with( index, {
    ...state.at(index),
    name: newName
});

state[0].name = 'Otro nombre';

console.table(state);
console.table(newState);