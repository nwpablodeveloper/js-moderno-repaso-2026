// Este archivo va a ser para crear los objetos de la app

export class Todo {
    
    /**
     * 
     * @param {String} descriptcion Descripción de la tarea
     */
    constructor( descriptcion ){
        this.id = 1;
        this.descriptcion = descriptcion;
        this.done = false;
        this.createdAt = new Date();
    }

}