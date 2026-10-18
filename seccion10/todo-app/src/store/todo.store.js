// Archivo para definir el estado total de la app

import { Todo } from "../todos/models/todo.model";

// Centralizar las opciones del filtro con una interface
const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pendig'
}

const state = {

    todos: [
        new Todo(`Piedar del infinito`),
        new Todo(`Piedar del almaa`),
        new Todo(`Piedar del tiempo`),
    ],
    filter: Filters.All

}

const initStore = () => {

    console.log(state);
    console.log(`InitStoro 🥑`);

}


const loadStore = () => {
    throw new Error('load store no implementado');
}

const getTodo = ( filter = Filters.All) => {
    throw new Error(`Método no implementado`);
}

const addTodo = () => {
    throw new Error('load store no implementado');
}

/**
 * 
 * @param {String} todoId Es el identificador de la tarea
 */
const toggleTodo = ( todoId ) => {
    throw new Error('No implementado');
}

const deleteCompleted = () => {
    throw new Error('No implementado');
}

const setFilter = ( newFilter = Filters.All ) => {
    throw new Error('No implementado');
}

const getCurrentFilter = () => {
    throw new Error('No implementado');
}


export default {
    initStore,
    loadStore,
    getTodo,
    addTodo,
    toggleTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}
