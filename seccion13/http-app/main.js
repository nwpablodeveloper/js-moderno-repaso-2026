// @ts-nocheck
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { UserApp } from './server/src/users/app.js';

document.querySelector('#app').innerHTML = `
    <div class="card"></div>
`;

UserApp( document.querySelector(`.card`));

