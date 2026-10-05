const personaje = {
    nombre: 'Tony Stark', 
    codeNeme: 'Ironmain',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.79
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '1080, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima pelicula': 'Infinity War' // usar llave con espacio
};

// Eliminar una propiedad
delete personaje.edad ;

console.log(personaje);

console.log('\n');
const entriePares = Object.entries( personaje );
console.log(entriePares);

console.log('\n');
//Agregando propiedades
personaje.casado = true;
console.log(personaje);

// Bloquear la modificación de datos del objeto
console.log('\n');
Object.freeze(personaje);
personaje.dinero = 100000000; // Lo ignora y no tira error
personaje.casado = false;
personaje.direccion.ubicacion = 'Casta rica'; // Pero no congela a un sub objeto
console.log(personaje);

console.log('\n');
const propiedades = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje);
console.log({propiedades, values});

