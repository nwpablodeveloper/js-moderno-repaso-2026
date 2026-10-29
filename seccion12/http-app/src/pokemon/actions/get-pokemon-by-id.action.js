// @ts-nocheck

const pokemonCache = new Map();

/**
 * 
 * @param {number} id 
 * @returns {Promise<Object>}
 */
export const getPokemonById = async ( id ) => {

    if( pokemonCache.has(id) ){
        console.log('servido de caceh');
        return pokemonCache.get(id);
    }

    //* Método no simplificado
    // fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`)
    //     .then( response => {
    //         return response.json()
    //     })
    //     .then( data => {
    //         console.log(data);
    //     })
    //     .catch( error => {
    //         console.log(error);
    //     })

    //* Refactorizado
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`);
    const data = await response.json();
    console.log(data);
    
    const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default
    }

    pokemonCache.set( id, pokemonData );

    return pokemonData;

}