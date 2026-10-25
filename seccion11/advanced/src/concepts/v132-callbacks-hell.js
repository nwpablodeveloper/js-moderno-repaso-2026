// @ts-nocheck

import { heroes } from '../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksHellComponent = ( element ) => {

    console.log("Callbacks Hell Component");

    const id1 = `5d86371f97c29d020f1e1f6d`;
    const id2 = `5d86371fd55e2e2a30fe1cc3`;
    const id3 = `5d86371fd55e2e2a30fe1cc4`;

    findHeroes( id1, (error, heroe1) => {
        
        if( error ){
            element.innerHTML = error;
            return;
        }

        findHeroes( id2, (error, heroe2) => {

            if(error){
                element.innerHTML = error;
                return;
            }
            
            findHeroes( id3, (error, heroe3) => {
                
                if(error){
                    element.innerHTML = error;
                    return;
                }

                element.innerHTML = `${heroe1.name} / ${heroe2.name} / ${heroe3.name} `;
            })
        });
    });

}


/**
 * 
 * @param {String} id 
 * @param {(error: String|null, heroe: Object)=>void} callback 
 */
const findHeroes = ( id, callback ) => {

    const heroe = heroes.find( heroe => heroe.id === id);

    if( !heroe ){
        callback(`Hero con id: ${ id} no encontrado`);
        return; // Undefined
    }

    callback( null, heroe );

}