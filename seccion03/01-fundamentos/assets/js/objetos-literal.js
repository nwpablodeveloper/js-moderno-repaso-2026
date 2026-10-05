let personaje = {
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

// Como acceder a los datos del objeto
console.log('Personaje:', personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje['edad']);

// Acceder a los datos que estan anidados
console.log('Lat:', personaje.coords.lat);

console.log('Nro. Trajes:', personaje.trajes.length);

// Ultimo traje
console.log('Nro. Trajes:', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última pelicula: ', personaje['ultima pelicula']);

