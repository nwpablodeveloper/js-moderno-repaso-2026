// ?raw para que vite force la importación
import html from './app.html?raw'

/**
 * 
 * @param {String} elementId Elemento donde voy a renderizar mi App
 */
export const App = ( elementId ) => {

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html
        document.querySelector(elementId).append( app );
    })();

}