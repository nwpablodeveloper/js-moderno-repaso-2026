import { loadUsersByPage } from '../use-cases/load-users-by-page'

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage =  async () => {
    await loadUsersByPage( state.currentPage + 1);
}

const loadPrevPage = async () => {
    throw new Error(`Load Previous Page no implementado`);
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
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}