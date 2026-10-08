console.log('\n %c Bucle For', 'color:#b2ffff;font-wight: bold');

const heroes = [
    'Batman',
    'Superman',
    'Mujer Maravilla',
    'Aquaman',
];

for (let i = 0; i < heroes.length; i++) {
    console.log( heroes[i] );
}

console.log('\n %c Bucle For in', 'color:#b2ffff;font-wight: bold');

for( let j in heroes){
    console.log( heroes[j]);
}

console.log('\n %c Bucle For of', 'color:#b2ffff;font-wight: bold');

for (let heroe of heroes) {
    console.log(heroe);
}

console.log('\n %c Bucle anidado', 'color:#b2ffff;font-wight: bold');


for (let i = 0; i < heroes.length; i++) {
    console.log( heroes[i] );
    for (const heroe of heroes) {
        console.log(heroe);
    }
}