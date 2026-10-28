// @ts-nocheck

/**
 * Esta función crea la app en el div enviado
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = ( element ) => {

    document.title = "Pokemon App";
    const tittleElement = document.querySelector('#app-title');

    tittleElement.innerHTML = "Pokemon App";

    console.log('hola mundo');
    console.log(element);

}