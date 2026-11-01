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

const onUserChange = async () => {
    throw new Error(`On User Page no implementado`);
}

const reloadPage = async () => {
    throw new Error(`Reload Page no implementado`);
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