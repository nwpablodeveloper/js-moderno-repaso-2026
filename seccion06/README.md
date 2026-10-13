# Sección 06: Patrón módulo y optimizaciones

- V060 - Introducción a la sección
- V061 - Temas puntuales de la sección
  - Patrón módulo
  - Minimizar el código de forma manual (luego lo haremos de forma automática)
  - Optimizaciones y protección de código
    - Esta es una sección que enseña mucho sobre la protección de nuestro código y cómo manipular programas que no usen estos patrones.
- V062 - Problematica del código de Blackjack
- V063 - Patrón módulo
  ```js
    // Función llamada como Patrón Módulo

    (() => {
      
      'use strict' // Evalua el código de forma estricta

      // Ejecutar el código ya que es autoinvocada
    })() 
  ``` 
- V064 - Optimizaciones, primera parte
- V065 - Optimizaciones, segunda parte
- V066 - Optimizaciones, tercera parte
- V067 - Detalle pendientes sobre los puntos del jugador
- V068 - Código fuente del juego de [blackjak](https://github.com/Klerith/js-blackjack/tree/master) (21)
- V069 - [Code Minify](https://www.toptal.com/developers/javascript-minifier)
  - App Web para minimizar/comprimir los archivos JS 