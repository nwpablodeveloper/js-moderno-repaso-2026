// @ts-nocheck
import { User } from '../models/user'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async ( userLike ) => {
    
    const user = new User( userLike );
    
    //TODO poner un mapper para enviar la data como la quiere el server

    if( user.id ){
        throw new Error('implementar la actualización del usuario');
    }

    const updateUser = await createUser( user );

    console.log(updateUser);

    return updateUser;
}

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async ( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();

    return newUser;



}