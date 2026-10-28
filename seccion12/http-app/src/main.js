// @ts-nocheck
import { PokemonApp } from './pokemon/pokemon-app';
import './style.css'
// import {  } from '';


document.querySelector('#app').innerHTML = `
  <main>
    <h1 id="app-title">Hola Mundo</h1>
    <section class="information-card"></section>
  </main>
`;


PokemonApp( document.querySelector('.information-card'));

