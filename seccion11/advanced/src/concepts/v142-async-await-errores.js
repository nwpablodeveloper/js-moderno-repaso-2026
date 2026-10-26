// @ts-nocheck
import { heroes } from './../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitErroresComponente = async ( element ) => {

    const id1 = '5d86371f1efebc31def272e2';
    const id2 = '5d86371f2343e37870b91ef1';

    try {
        
        const hero1 = await findHero( id1 );
        const { name } = await findHero( id2 ); 
    
        element.innerHTML = `${ hero1.name } <br> ${ name }`;
        
    } catch (error) {
        element.innerHTML = error;
    }

}


const findHero = async ( id ) => {

    const hero = heroes.find( hero => hero.id === id );

    if( !hero )
        throw `Heroe con id: ${ id } No existe`;

    return hero;

}