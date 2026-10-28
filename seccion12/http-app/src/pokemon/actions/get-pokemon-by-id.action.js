// @ts-nocheck

/**
 * Fecht pokemon información de pokemon API
 * @param {number} id 
 * @returns {Object} Devuelve la información de un pokemon
 */
export const getPokemonById = ( id ) => {


    fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`)
        .then( response => {
            return response.json()
        })
        .then( console.log )
        .catch( error => {
            console.log(error);
        })

    return {};

}