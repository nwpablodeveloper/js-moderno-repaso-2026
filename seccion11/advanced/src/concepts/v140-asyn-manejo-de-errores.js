// @ts-nocheck
import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncManejoErroresComponente = ( element ) => {

    element.innerHTML = 'Loading...';
    const id1 = '5d86371f1efebc31def272e2';
    const id2 = 'asdfa';


    findHero( id2 )
        .then( name  => element.innerHTML = name)
        .catch( error => element.innerHTML = error )
}

/**
 * 
 * @param {String} id 
 * @param {Promise<String>} // Retorna una promesa que resuelve un String
 */
const findHero = async ( id ) => {

    const hero = heroes.find( hero => hero.id === id); 

    if( !hero )
        throw new Error('Atrapando el error con el catch')

    return hero.name;

}