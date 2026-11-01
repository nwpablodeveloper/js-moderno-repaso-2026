// @ts-nocheck
import html from './render-modal.html?raw'
import './render-modal.css';

let modal, form; 

// TODO cargar usuario por ID
export const showModal = () => {

    modal?.classList.remove('hide-modal');

}

export const hideModal = () => {
    
    modal.classList.add('hide-modal');
    //TODO reset de formulario

}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = ( element ) => {

    if( modal ) returna;

    modal = document.createElement('div');
    modal.innerHTML = html;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    modal.addEventListener('click', ( event ) => {
        
        if(event.target.className != 'modal-container') return;

        hideModal();
        

    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(event);
        console.log('formulario enviado');
        hideModal();
    })

    element.append( modal );
    

}

