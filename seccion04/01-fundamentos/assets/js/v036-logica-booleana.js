const regresaTrue = () => {
    console.log('Regreso true');
    return true;
}

const regresaFalse = () => {
    console.log('Regreso false');
    return false;
}

console.log('\n %c Negación booleana "!"', 'color:#b2ffff;font-wight: bold');

console.log(!true);
console.log(!false);
console.log(!!!!!!!false);
console.log(!regresaFalse());

console.log('\n %c Operador AND', 'color:#b2ffff;font-wight: bold');

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log('7 condiciones', false && true && true && true && true && true && true);
console.log('7 condiciones', true && true && true && true && true && true && true);


console.log('\n %c Operador Orden de ejecución', 'color:#b2ffff;font-wight: bold');
regresaFalse() && regresaTrue(); // Si la primera es false ya no es necesario continuar
console.log('\n %c Operador Orden de ejecución', 'color:#b2ffff;font-wight: bold');
regresaTrue() && regresaFalse(); 

console.log('\n %c Operador OR', 'color:#b2ffff;font-wight: bold');
console.log( false || true);
console.log( true || false ); // Suficiente que se cumpla la primera
