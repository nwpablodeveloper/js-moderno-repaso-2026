// @ts-nocheck

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const funcionGeneradoraEjemploComponente = ( element ) => {

    const generadorDeId = idGenerador();

    const button = document.createElement('button');
    button.innerText = 'Click me';
    element.append(button);

    const renderButton = () => {
        const { value } = generadorDeId.next();
        button.innerText = `Click ${ value }`;
    }

    button.addEventListener('click', renderButton);

}



function* idGenerador(){
    
    let currentId = 0;

    while(true){
        yield ++currentId;
    }
}
