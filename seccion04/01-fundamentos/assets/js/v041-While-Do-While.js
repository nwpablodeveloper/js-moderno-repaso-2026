console.log('\n %c Romper While', 'color:#b2ffff;font-wight: bold');

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
while(  i < carros.length ){
    if(i === 2) break;
    console.log( carros[i]);
    i++;
}


console.log('\n %c Otro while', 'color:#b2ffff;font-wight: bold');

i = 0;
while( carros[i] ){
    console.log( carros[i] );
    i++;
}

console.log('\n %c while Continue para romper la vuelta nada mas', 'color:#b2ffff;font-wight: bold');

i = 0;
while( carros[i] ){
    if( i === 1){ 
        i++;
        continue
    };
    console.log( carros[i] );
    i++;
}

console.log('\n %c Do While', 'color:#b2ffff;font-wight: bold');

i = 0;
do {
    console.log(carros[i]);
    i++;
} while ( i < carros.length);