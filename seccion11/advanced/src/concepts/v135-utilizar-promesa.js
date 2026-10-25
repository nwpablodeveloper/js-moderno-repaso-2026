// @ts-nocheck

import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesComponent = ( element ) => {

    const id1 = `5d86371f1efebc31def272e2`;

    const renderHeroe = ( heroe ) => {
        element.innerHTML = heroe.name
    }

    const renderError = ( error ) => {
        element.innerHTML = `<h3>${error}</h3>`;
    }

    findHero(id1)
        // .then( HereoRecibido => renderHeroe(HereoRecibido))
        .then(renderHeroe)
        .catch(renderError)


}

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, Heroe: Object)=>void} callback
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