// @ts-nocheck

import { localHostUserToModel } from "../mappers/loclahost-user.mapper";


/**
 * 
 * @param {Number|Number} id
 * @returns {Promise<User>}
 */
export const getUserById = async ( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch(url);
    let data = await res.json();

    return  localHostUserToModel( data );


}