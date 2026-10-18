// ?raw para que vite force la importación
// @ts-ignore
import html from './app.html?raw'

/**
 * 
 * @param {String} elementId Elemento donde voy a renderizar mi App
 */
export const App = ( elementId ) => {

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html

        if (!elementId) throw new Error(`No existe el elemento: ${elementId}`);

        const elementHTML = document.querySelector(elementId);
        if(!elementHTML) throw new Error (`El elemento HTML no llego`)
        elementHTML.append( app );
    
    })();

}