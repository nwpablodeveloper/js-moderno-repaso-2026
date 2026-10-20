import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
// @ts-ignore
export const rendoerTodo = ( elementId, todos = []) => {

    const element = document.querySelector( elementId );

    // @ts-ignore
    todos.forEach( todo => {
        element?.append( createTodoHTML(todo) );
    });

}