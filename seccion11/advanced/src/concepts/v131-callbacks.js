// @ts-nocheck

import { heroes } from './../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = ( element ) => {

    console.log("Callbacks Component");

    const id = `5d86371f1efebc31def272e2`;
    findHeroes( id, (heroe) => {
        element.innerHTML = heroe.name;
    });

}


/**
 * 
 * @param {String} id 
 * @param {(heroe: Object)=>void} callback 
 */
const findHeroes = ( id, callback ) => {

    const heroe = heroes.find( heroe => heroe.id === id);

    callback( heroe );

}