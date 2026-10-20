import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = ( todo ) => {
    
    if( !todo ) throw new Error(`El TODO es requerido`);

    const html = `<h1>${ todo.descriptcion }</h1>`;

    const liElemento = document.createElement('li');
    liElemento.innerHTML = html;
    
    return liElemento;
}

/* 
<li class="completed" data-id="abc">
    <div class="view">
        <input class="toggle" type="checkbox" checked>
        <label>Probar JavaScript</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>
             */