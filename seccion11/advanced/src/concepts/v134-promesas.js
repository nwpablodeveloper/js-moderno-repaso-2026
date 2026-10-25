// @ts-nocheck

import { heroes } from './../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = ( element ) => {

    const id1 = `5d86371f1efebc31def272e2`;

}

/**
 * 
 * @param {String} id 
 * @returns {Promise<Object>}
 */
const findHero = (id, callback) => {
    
    return new Promise( ( resolve, reject ) => {
        
        const heroe = heroes.find( heroe => heroe.id === id);

        if( heroe ){
            resolve( heroe );
            return;
        }

        reject(`El heroe con id: ${ id } no existe`);

    });

}