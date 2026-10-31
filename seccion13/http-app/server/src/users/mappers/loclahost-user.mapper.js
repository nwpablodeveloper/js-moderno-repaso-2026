// @ts-nocheck
// Recibimos la data con un formato y la transformamos al que queremos

import { User } from "../models/user";

/**
 * 
 * @param {Like<User>} localhostUser  // luce como un usuario
 * @returns {User} // regresa una instancia de nuestro usuario
 */
export const localHostUserToModel = ( localhostUser ) => {

    const { 
        id, 
        isActive, 
        balance, 
        avatar, 
        first_name, 
        last_name, 
        gender, 
    } = localhostUser;

    return new User({
        id, 
        isActive, 
        balance, 
        avatar, 
        firstName: first_name,
        lastName: last_name, 
        gender
    });
}