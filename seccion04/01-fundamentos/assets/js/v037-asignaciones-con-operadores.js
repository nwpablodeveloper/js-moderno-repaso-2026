const regresaTrue = () => {
    return true;
}

const regresaFalse = () => {
    return false;
}

console.log('\n %c Asignaciones', 'color:#b2ffff;font-wight: bold');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && "Hola Mundo";
const a2 = true && "Hola Mundo" && 150;
const a3 = false && "Hola Mundo" && 150;
const a4 = "Hola" && "Mundo";
const a5 = "Hola" && "Mundo" && soyFalse;
const a6 = "Hola" && "Mundo" && soyFalse && true;

console.log({a1});
console.log({a2});
console.log({a3});
console.log({a4});
console.log({a5});
console.log({a6});

const a7 = soyFalse || 'ya no soy falso';
const a8 = soyFalse || soyUndefined || soyNull || 'ya no soy falso';
const a9 = soyFalse || soyUndefined || soyNull || 'ya no soy falso' || true;
const a10 = soyFalse || soyUndefined || regresaTrue() || 'ya no soy falso' || true;

console.log({a7});
console.log({a8});
console.log({a9});
console.log({a10});


console.log('\n %c Ejemplo raro', 'color:#b2ffff;font-wight: bold');

if( true || true || true || false) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}

if( regresaFalse() || regresaTrue() && (true || true || true || false)) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}
