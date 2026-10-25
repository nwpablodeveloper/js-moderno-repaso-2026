# Sección 11: Callbacks, promesas y generadores 

- V126 - Introducción a la sección
- V127 - Temas puntuales de la sección
  - Variables de entorno
  - Callbacks y callback hell
  - Promises y promise hell
  - Async, async - await
  - Evitar los callback o promise hells
  - Funciones generadoras
  - Funciones generadoras asíncronas
- V128 - Inicio del proyecto, conceptos avanzados
- V129 - Variables de entorno
  - .env
  - ```VITE_NOMBRE_VARIABLE``` Es necesario ```VITE_``` para que reconozca las variables
  - ```import.meta.env```  para acceder a las variables
- V130 - Componente rápido para futuros ejercicios
- V131 - Callbacks
  ```
    Un callback en JavaScript es una función que se pasa como argumento a otra función para que se ejecute más tarde, normalmente cuando ocurre algo o termina una tarea.
  ```
- V132 - Manejo de errores en los Callbacks
  ```js
    const id = `5d86371f1efebc31def272e22`;
      findHeroes( id, (heroe) => {
          // agregando el ? nos va a tirar Undefined si no lo encuentra
          element.innerHTML = heroe?.name ; 
      });
  ```
- V133 - Callback Hell