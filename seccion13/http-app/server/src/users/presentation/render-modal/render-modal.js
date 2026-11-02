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
    form?.reset();
    //TODO reset de formulario

}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLIke) =>  Promise<void> } saveUserCallback
 */
export const renderModal = ( element, saveUserCallback ) => {

    if( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = html;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', ( event ) => {
        //* Si ahces click en la sombra negra del modal, el mismo se cierra
        if(event.target.className != 'modal-container') return;
        hideModal();
    });

    form.addEventListener('submit', async (event) => {

        //* Anula enviar el formulario via "POST"
        event.preventDefault();
        
        const formData = new FormData( form );
        const userLike = {}; 

        for (const [key, value] of formData) {

            if( key === 'balance') {
                //! Convertimos el numero que viene en string a number
                userLike[key] = +value;
                continue;
            }

            if( key === 'isActive' ) {
                userLike[key] = (value === 'on') ? true : false;
            }
            
            userLike[key] = value;

        }

        await saveUserCallback( userLike );
        hideModal();
    })

    element.append( modal );
    

}

