// @ts-nocheck

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const funcionesGeneradorasComponente = ( element ) => {

    const miGenerador = miPrimeraFuncionGeneradora();

    console.log(miGenerador.next());
    console.log(miGenerador.next());
    console.log(miGenerador.next());
    console.log(miGenerador.next());
    console.log(miGenerador.next());
    console.log(miGenerador.next());

}

function* miPrimeraFuncionGeneradora() {

    yield 'Primer valor';
    yield 'Segundo valor';
    yield 'Tercer valor';
    yield 'Cuarto valor';
    
    return 'Ya no hay valores';
    yield 'Aca no llega por que hay un return';

}