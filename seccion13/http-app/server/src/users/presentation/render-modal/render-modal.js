// @ts-nocheck
import html from './render-modal.html?raw'
import './render-modal.css';

let modal; 
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = ( element ) => {

    if( modal ) returna;

    modal = document.createElement('div');
    modal.innerHTML = html;
    modal.className = 'modal-container hide-modal';

    element.append( modal );
    

}