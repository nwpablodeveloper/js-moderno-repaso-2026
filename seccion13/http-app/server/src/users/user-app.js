import usersStore from './stores/users-store';

/**
 * 
 * @param {HTMLElement} elemnt 
 */
export const UserApp = async ( elemnt ) => {

    elemnt.innerHTML = `Loading...`;
    await usersStore.loadNextPage();

    console.log(usersStore.getUsers());
}