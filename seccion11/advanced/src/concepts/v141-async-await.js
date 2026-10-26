// @ts-nocheck
import { heroes } from './../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponente = async ( element ) => {

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    // Estas promesas se ejecutan de forma secuencial
    const hero1 = await findHero( id1 );
    const { name } = await findHero( id2 ); // No se ejecuta hasta que no se resuelva la anterior

    element.innerHTML = `${ hero1.name } <br> ${ name }`;

}


const findHero = async ( id ) => {

    const hero = heroes.find( hero => hero.id === id );

    if( !hero )
        throw `Heroe con id: ${ id } No existe`;

    return hero;

}