

function saludar (nombre) {
    console.log(arguments);
    console.log(`Hola ` + nombre);
    return 10;

    console.log(`Soy un código que esta despues del return, no me ejecuto`);
}

function sumar(a, b) {
    return a + b;
}

const sumar2 = (a, b) => { 
    return a + b;
}

const sumarFuncionResumida = ( a, b) => a + b;

function getAleatorio(){
    return Math.random();
}

const getAleatorioConFunciónFlecha = () => Math.random(5,6);


const retornoDeSaludar = saludar(`Pablo`);
console.log(retornoDeSaludar);

console.log( sumar(1,5) );
console.log( sumar2(1,5) );
console.log( sumarFuncionResumida(1,55) );
console.log('Nro. Aletario: ', getAleatorio());
console.log('Nro. Aletario con función flecha: ', getAleatorioConFunciónFlecha());


