// @ts-nocheck
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
        new Todo(`Piedra del Espacio`),
        new Todo(`Piedra del Mente`),
        new Todo(`Piedra del Realidad`),
        new Todo(`Piedra del Poder`),
        new Todo(`Piedra del Alma`),
    ],
    filter: Filters.All

}

const initStore = () => {
/* 
    console.log(`InitStoro 🥑`);
    console.log(state);
    console.log(`InitStoro 🥑`); */

}


const loadStore = () => {
    throw new Error('load store no implementado');
}

const getTodos = ( filter = Filters.All) => {

    switch ( filter ){
        case Filters.All: 
            return [...state.todos];

        case Filters.Completed: 
            return state.todos.filter( todo => todo.done  ); // ? todo.done regresa un array de los que estan en true

        case Filters.Pending: 
            return state.todos.filter( todo => !todo.done ); //  ? odo.done regresa los false

        default: throw new Error (`${filter}: Opción no permitida`);
    }

}


const addTodo = ( description = '' ) => {

    if( !description ) throw new Error (`La decripción es requerida`);

    state.todos.push( new Todo( description) );
}

/**
 * 
 * @param {String} todoId Es el identificador de la tarea
 * cambia el estado de la tarea por ID
 */
const toggleTodo = ( todoId ) => {
    
    state.todos = state.todos.map( todo => {
        if( todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    });
}

// Eliminar tarea
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}

// Eliminar todas las tereas completadas
const deleteCompleted = ( ) => {
    state.todos = state.todos.filter ( todo => todo.done );
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}
