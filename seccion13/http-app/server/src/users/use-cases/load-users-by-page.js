// @ts-nocheck

import { localHostUserToModel } from "../mappers/loclahost-user.mapper";


/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async ( page = 1) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    const res = await fetch(url);
    let data = await res.json();
    data = data.data;


    //* Solución larga
    // data.forEach( user => {
    //     users.push(new User(localHostUserToModel(user)));
    // });

    //* Solución optimizada con .map();
    // return data.map( userLike => localHostUserToModel( userLike) );
    return  data.map( localHostUserToModel );

}