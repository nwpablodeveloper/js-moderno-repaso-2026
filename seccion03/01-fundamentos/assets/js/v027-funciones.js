function saludar(){
    console.log('Hola mundo');
}

// Saludar "var" va a tener conflicto con la función que se llama saludar
// var saludar = 'hola';

const saludar2 = function( nombre ) { // Función anonima
    console.log(`Hola ` + nombre);
}

function saludar3 (nombre) {
    console.log(`Hola ` + nombre);
}

function saludar4 (nombre) {
    console.log(`Hola ` + nombre);
    console.log(arguments);
}

const saludarFlecha = ( nombre ) => {
    console.log(`Hola ` + nombre + ` con función flecha`);
}

const saludarFlecha2 =  nombre  => { // si tiene 1 solo argumento los parentesis no son necesarios
    console.log(`Hola ` + nombre + ` con función flecha`);
}



saludar();
saludar2('Pablo');
saludar3('Pablo');
saludar4('Pablo', 40, true, 'Argentina');
saludarFlecha(`Pablo`);


// Enviar mas argumentos a la función

