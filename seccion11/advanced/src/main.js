// @ts-nocheck
import './style.css';
import heroImg from './assets/hero.png';
import javascriptLogo from './assets/javascript.svg';
import viteLogo from './assets/vite.svg';
import { setupCounter } from './counter.js';
// import { promisesComponent } from './concepts/v134-promesas.js';
// import { promisesHellComponent } from './concepts/v136-promises-hell.js';
// import { promisesAllComponent } from './concepts/v137-promise-all.js';
// import { promiseRaceComponente } from './concepts/v138-promise-race.js';
// import { asyncComponente } from './concepts/v139-async.js';
// import { asyncManejoErroresComponente } from './concepts/v140-asyn-manejo-de-errores.js';
// import { asyncAwaitComponente } from './concepts/v141-async-await.js';
// import { asyncAwaitErroresComponente } from './concepts/v142-async-await-errores.js';
// import { asyncAwaitNoSecuencialComponente } from './concepts/v143-async-await-no-secuencial.js';
// import { forAwaitComponent } from './concepts/v144-for-await-if-await.js';
// import { funcionesGeneradorasComponente } from './concepts/v145-funciones-generadoras.js';
// import { funcionGeneradoraEjemploComponente } from './concepts/v146-funcion-generadora-ejemplo.js';
import { generatorsAsyncComponent } from './concepts/v147-funciones-generadoras-asincronas.js';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="src/assets/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>

    <div class="card">
    
    </div>

  </div>
`

const element = document.querySelector('.card')

// promiseRaceComponente( element );
generatorsAsyncComponent( element );

