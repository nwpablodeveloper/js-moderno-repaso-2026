// @ts-nocheck
import { loadUsersByPage } from '../use-cases/load-users-by-page'

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage =  async () => {

    const users = await loadUsersByPage( state.currentPage + 1);
    if( users.length === 0) return ;

    state.currentPage += 1;
    state.users = users;

}

const loadPrevPage = async () => {

    if( state.currentPage === 1) return;

    const users = await loadUsersByPage( state.currentPage - 1);
    state.currentPage -= 1;
    state.users = users;
}

/**
 * 
 * @param {User} user 
 */
const onUserChange = async ( updatedUser ) => {

    let wasFound = false;

    state.users = state.users.map( user => {
        if( user.id === updatedUser.id ){
            wasFound = true;
            return updatedUser;
        }
        return user;
    });

    if( state.users.length < 10 && !wasFound){
        state.user.push( updatedUser );
    }
}

const reloadPage = async () => {

    const users = await loadUsersByPage( state.currentPage);
    if( users.length === 0) {
        await loadPrevPage();
        return;
    } 
    state.users = users;
}

export default {
    loadNextPage,
    loadPrevPage,
    onUserChange,
    reloadPage,
    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users],
    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage
}