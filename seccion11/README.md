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
- V132 - Manejo de errores en los [Callbacks](advanced/src/concepts/v131-callbacks.js)
  ```js
    const id = `5d86371f1efebc31def272e22`;
      findHeroes( id, (heroe) => {
          // agregando el ? nos va a tirar Undefined si no lo encuentra
          element.innerHTML = heroe?.name ; 
      });
  ```
- V133 - [Callback Hell](advanced/src/concepts/v132-callbacks-hell.js)
- V134 - Promesas
- V135 - Utilizar una promesa
- V136 - Promise Hell
- V137 - Promise All (Arreglo de promesas)
- V138 - Promese Race
- V139 - Async
  - En ves de devolver el valor de una función va a resolver una ```Promesa``` y nos va a dar acceso al .then()
   al momento de ser llamada.
- V140 - Manejo de errores en funciones asíncronas
- V141 - Async y Await
- V142 - Errores en Async y Await usando try/catch
- V143 - Optimizar promesas no secuenciales
- V144 - For await y if await
- V145 - Funciones generales
- V146 - Ejemplo de funciones generadoras