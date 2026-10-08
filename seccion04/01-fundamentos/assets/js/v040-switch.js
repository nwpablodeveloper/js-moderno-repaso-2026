console.log('\n %c Switch', 'color:#b2ffff;font-wight: bold');

const dia = 0; // Domingo

switch ( dia ) {
    case 0: 
        console.log('Domingo');
        break;
    case 1: 
        console.log('Lunes');
        break;
    case 2: 
        console.log('Martes');
        break;
    default:
        console.log('No es ni Lunes ni Martes ni Domingo');
}

