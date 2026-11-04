// @ts-nocheck
import usersStore from '../../stores/users-store';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

let table; 

const createTable = () => {
    const table = document.createElement('table');
    const tablaHeader = document.createElement('thead');
    tablaHeader.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Action</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append( tablaHeader, tableBody );
    return table;
}

const tableSelectListener = ( event ) => {

    const element = event.target.closest('.select-user');
    if( !element ) return;

    const id = element.getAttribute('data-id');
    showModal(id);
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

    const users = usersStore.getUsers();

    if( !table ) {
        table = createTable();
        element.append( table );

        table.addEventListener('click', event => tableSelectListener(event))
    }
    

    let tableHTML  = '';
    users.forEach( user => {
        tableHTML += `
        <tr>
            <td>${ user.id }</td>
            <td>${ user.balance }</td>
            <td>${ user.firstName }</td>
            <td>${ user.lastName }</td>
            <td>${ user.isActive }</td>
            <td>
                <a href="#" class="select-user" data-id="${ user.id }">Select</a>
                <a href="#" class="delete-user" data-id="${ user.id }">Delete</a>
            </td>
        </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;

}