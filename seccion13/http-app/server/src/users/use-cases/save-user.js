// @ts-nocheck
import { userModelToLocalHost } from '../mappers/user-to-locahost.mapper';
import { User } from '../models/user'

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async ( userLike ) => {

    
    const user = new User( userLike );
    
    if( !user.firstName || !user.lastName )
        throw 'Primer nombre y apellido es requerido';

    const userToServer = userModelToLocalHost( user );

    if( user.id ){
        throw new Error('implementar la actualización del usuario');
    }
    
    const updateUser = await createUser( userToServer );

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