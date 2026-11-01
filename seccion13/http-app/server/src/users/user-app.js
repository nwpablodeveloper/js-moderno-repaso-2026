// @ts-nocheck
import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './stores/users-store';

/**
 * 
 * @param {HTMLElement} elemnt 
 */
export const UserApp = async ( elemnt ) => {

    elemnt.innerHTML = `Loading...`;
    await usersStore.loadNextPage();

    elemnt.innerHTML = '';
    renderTable( elemnt );
    renderButtons( elemnt );
    renderAddButton( elemnt )
}