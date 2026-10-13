/* 
    2C = Two of clubs 
    2D = Two of Diamonds 
    2H = Two of Hearts
    2S = Two of Spades
*/
// console.log(_);

const miModulo = (() => {
    'use strict'

    let deck            = [];

    const tipos         = ['C','D','H','S'],
          especiales    = ['A','J','Q','K'];

    const   btnDetener          = document.querySelector('#btnDetener'),
            btnNuevo            = document.querySelector('#btnNuevo'),
            btnPedir            = document.querySelector('#btnPedir')
            
    const   divCartasJugadores  = document.querySelectorAll('.divCartas'),
            puntosHTML          = document.querySelectorAll('small');

    let     puntosJugadores = [0,0];

    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = [];
        deck = crearDeck();
        for (let i = 0; i < puntosJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerHTML = 0);
        divCartasJugadores.forEach( elem => elem.innerHTML = "");

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Esta función crea una nueva baraja  (Mezcla el maso)
    const crearDeck = () => {

        deck = [];
        
        for (let i = 2; i <= 10; i++){
            for (const tipo of tipos) {
                deck.push( i + tipo);
            }
        }
        
        for (let letra of especiales) {
            for (let tipo of tipos) {
                deck.push( letra + tipo)        ;
            }
        }

        return _.shuffle(deck); 
    }


    const pedirCarta = () => {

        if( deck.length === 0) {
            throw 'No hay cartas en el deck'
        };
        return deck.pop();
    }

    // Sumar los valores de las cartas pedidas 
    const valorCarta = ( carta ) => {

        // Cortar el string de la posición 0 hasta carta.lenght - 1
        const valor = carta.substring(0, carta.length - 1); 
        return  ( isNaN(valor) ) ? 
                ( valor === 'A') ? 11 : 10
                : 1 * valor;
    };


    btnPedir.addEventListener('click',  () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta, 0);

        crearCarta( carta, 0);
        
        if(puntosJugador > 21) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }else if( puntosJugador === 21 ) {
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }

    });

    const acumularPuntos = ( carta, turno ) => {
        
        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerHTML = puntosJugadores[turno];
        return puntosJugadores[turno];

    }

    const crearCarta = ( carta, turno ) => {

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);

    }

    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

         setTimeout(() => {

            if( puntosComputadora === puntosMinimos){
                alert('Empate');
            } else if( puntosMinimos > 21 ){
                alert('Computadora gana');
            }else if( puntosComputadora > 21 && puntosMinimos <=21){
                alert('Jugador gana');
            }else if( puntosComputadora > puntosMinimos){
                alert('Computadora gana');
            }else {
                alert('Jugador gana');
            }

        },100);
    }

    const turnoComputadora = ( puntosJugador ) => {

        let puntosComputadora = 0;

        do{
            const carta = pedirCarta();
            puntosComputadora += acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta( carta, puntosJugadores.length -1);

            if( puntosJugador > 21){
                break;
            }

        }while( (puntosComputadora <= puntosJugador ) && ( puntosJugador <= 21 ));

        determinarGanador();

    };

    
    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);

    });

    
    btnNuevo.addEventListener('click', () => {

        inicializarJuego();

    });

    return {
        nuevoJuego: inicializarJuego
    };

})();