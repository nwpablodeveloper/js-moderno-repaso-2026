// @ts-nocheck

import { getPokemonById } from "./actions/get-pokemon-by-id.action";

/**
 * Esta función crea la app en el div enviado
 * @param {HTMLDivElement} element 
 */
export const PokemonApp = async ( element ) => {

    let pokemonId = 1;

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
    nextBtn.addEventListener('click', async () => {
        loadingParagraph.textContent = 'Cargando siguiente pokemon';
        pokemonId++;
        renderPokemon( await getPokemonById(pokemonId));
    })

    prevBtn.addEventListener('click', async () => {

        if (pokemonId === 1) return 

        loadingParagraph.textContent = 'cargando pokemon anterior';
        pokemonId--;
        renderPokemon( await getPokemonById( pokemonId ));
        loadingParagraph.textContent = `Pokemon #${ pokemon.id } ${ pokemon.name }`
        
    })


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
    renderPokemon( await getPokemonById( pokemonId ));

}