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

export default {
    initStore,
}
