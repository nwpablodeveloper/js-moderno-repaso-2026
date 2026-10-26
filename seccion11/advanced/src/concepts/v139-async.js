// @ts-nocheck
import { heroes } from './../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponente = ( element ) => {

    element.innerHTML = 'Loading...';
    const id1 = '5d86371f1efebc31def272e2';


    findHero( id1 )
        .then( name  => element.innerHTML = name);
    



}

/**
 * 
 * @param {String} id 
 * @param {Promise<String>} // Retorna una promesa que resuelve un String
 */
const findHero = async ( id ) => {

    const hero = heroes.find( hero => hero.id === id); 
    return hero.name;

}