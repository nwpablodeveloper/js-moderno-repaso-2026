# Sección 05: Laboratorio 1 - BlackJack

- V044 - Introducción a la sección
- V045 - Temas puntuales de la sección
  - Trabajar con arreglos
  - Mezclar los valores de los arreglos
  - Introducción a la manipulación del DOM
  - Eventos
  - Crear imágenes en la página
  - Realizar la lógica para implementar un competidor de cartas.
    - Esta sección es bien divertida (al menos eso espero), haremos un juego que nos enseñará muchas  cosas de JavaScript.
    - Tengan presente que el código que haremos en esta sección es potencialmente inseguro, (lo explico en la siguiente sección), por lo que puede ser modificado por usuarios y hacer trampa... pero eso es algo que cubriremos en la siguiente sección
- V046 - Demostración de la sección - BlackJack
- V047 - Inicio del proyecto BlackJack (el famoso juego del 21)
- V048 - Nota de actualización
  ```
    Nota:
      En la próxima clase usaremos Bootstrap para que nuestra aplicación se vea un poco mejor, por favor usen el material adjunto que les dejo en la siguiente clase para instalar el Bootstrap.

      En pocas palabras, esto es lo que hay que añadir:

      <title> Titulo de la página web</title>
      
      <!-- añadir esto -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      Pero usen el que se ve en la documentación, ya que hemos tenido muchas preguntas al respecto.
  ```
- V059 - Estilo y estructura de nuestro juego
- V060 - Crear baraja de cartas
  - [Libreria "Underscore" para mezclar arreglos](https://underscorejs.org/)
  - Usamos la función _.shuffle(Array) (barajar/Mezclar)
- V061 - Pedir carta
- V062 - Valor de cada carta
- V063 - Introducción al DOM y su manipulación
  - DOCUMENT OBJECT MODEL
  ```js 
    document.querySelector('.titulo').innerHTML = "<b>hola</b>"
    document.querySelectorAll('.titulo').innerHTML = "<b>Todos los elementos de la clase</b>"

    const titulo = document.querySelector('.titulo');
    titulo.innerHTML = 'Cambiar texto';
  ``` 
- V064 - Manipulación del DOM, segunda parte
  - Creación de elemtnos en el DOM
  ``` js
    const divBotoenes = document.querySelector('.divBotones');
    const botonNuevo = document.createElement('button');
    divBotones.append(botonNuevo);
    botonNuevo.innerHTML = 'Destruir toodo';
    botonuevo.classList.add('btn-solid');
    botonuevo.classList.add('theme-danger');
  ``` 
   