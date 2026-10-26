// @ts-nocheck

import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promisesHellComponent = ( element ) => {

    const id1 = `5d86371f1efebc31def272e2`;
    const id2 = `5d86371f2343e37870b91ef1`;

    const renderHeroe = ( heroe ) => {
        element.innerHTML = heroe.name
    }

    const renderError = ( error ) => {
        element.innerHTML = `<h3>${error}</h3>`;
    }

    const renderTwoHero = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }<h/3>`;

    }

    // Este método no es el que se usa, se resumen aun mas el código
    findHero(id1)
        .then( ( hero1 ) => {
            findHero(id2)
            .then( ( hero2 ) => {
                renderTwoHero(hero1, hero2)
            }).catch(renderError)
        })
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