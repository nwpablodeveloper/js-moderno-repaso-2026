// @ts-nocheck
// @ts-ignore
// ?raw para que vite force la importación
import html from './app.html?raw'

import todoStore from '../store/todo.store';
import { renderTodo } from './use-cases';

const ElementsIds = {
    TodosList: '.todo-list',
    NewTodoImput: '#new-todo-input'
}

/**
 * 
 * @param {String} elementId Elemento donde voy a renderizar mi App
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        // @ts-ignore
        renderTodo( ElementsIds.TodosList, todos);
    }

    (() => {

        const app = document.createElement('div');
        app.innerHTML = html;

        if (!elementId) throw new Error(`No existe el elemento: ${elementId}`);

        const elementHTML = document.querySelector(elementId);
        if(!elementHTML) throw new Error (`El elemento HTML no llego`)
        elementHTML.append( app );

        displayTodos();
    
    })();

    // Referencias HTML
    const newDescriptionImput = document.querySelector( ElementsIds.NewTodoImput );

    // Listener
    newDescriptionImput.addEventListener('keyup', ( event ) => {

        if( event.keyCode !==13 ) return;
        if( event.target.value.trim().lenght === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

}