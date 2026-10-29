// @ts-nocheck

import { getPokemonById } from "./actions/get-pokemon-by-id.action";

/**
 * Esta función crea la app en el div enviado
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = async ( element ) => {

    document.title = "Pokemon App";
    const tittleElement = document.querySelector('#app-titadsfle');

    // if( !tittleElement ) document.title('No hay titulo');
    tittleElement && ( tittleElement.innerHTML = 'Pokemon App')

    //* Crar los elementos html
    const loadingParagraph = document.createElement('p');
    const pokemonImage = document.createElement('img');
    const nextBtn = document.createElement('button');
    const prevBtn = document.createElement('button');

    //* Configuraciones de los elementos HTML
    loadingParagraph.textContent = 'Cargando...';
    nextBtn.textContent = 'Siguiente';
    prevBtn.textContent = 'Anterior';


    //* Renderizar los elementos en el DOM
    element.appendChild(loadingParagraph);
    element.appendChild(pokemonImage);
    element.appendChild(nextBtn);
    element.appendChild(prevBtn);

    //* Listeners de los botones


    //* Rendereizar el pokemon
    const renderPokemon = ( pokemon ) => {
        pokemonImage.src = pokemon.image;
        loadingParagraph.textContent = `Pokemon #${ pokemon.id } ${ pokemon.name }`
    }


    //* Hacer las peticiones inicial


    //? Forma 1
    // getPokemonById(5)
    //     .then( renderPokemon )

    //? Forma 2 con Asyn Await
    renderPokemon( await getPokemonById(2));

}