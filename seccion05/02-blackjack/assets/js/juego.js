/* 
    2C = Two of clubs 
    2D = Two of Diamonds 
    2H = Two of Hearts
    2S = Two of Spades
*/
// console.log(_);

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];


// Esta función crea una nueva baraja  (Mezcla el maso)
const crearDeck = () => {

    for (let i = 2; i <= 10; i++){
        // deck.push( `${ i }C`);
        for (const tipo of tipos) {
            deck.push( i + tipo);
        }
    }
    
    for (let letra of especiales) {
        for (let tipo of tipos) {
            deck.push( letra + tipo)        ;
        }
    }

    // _.shuffle de la libreria UNDERSCORE es el method abarajar/Mezclar
    deck = _.shuffle(deck); 
    console.log(deck);
    return deck;
}

// Esta función crea una nueva baraja (Mezcla el maso)
crearDeck();


// Función permite tomar 1 carta
const pedirCarta = () => {

    if( deck.length === 0) {
        throw 'No hay cartas en el deck'
    };

    const carta = deck.pop();
    // console.log(carta);
    return carta;
}

// Sumar los valores de las cartas pedidas
let puntos = 0;
const valorCarta = ( carta ) => {

    // Cortar el string de la posición 0 hasta carta.lenght - 1
    const valor = carta.substring(0, carta.length - 1); 
    return  ( isNaN(valor) ) ? 
            ( valor === 'A') ? 11 : 10
            : 1 * valor;

    // if( isNaN (valor)){
    //     puntos += ( valor === 'A') ? 11 : 10;

    // } else {
    //     puntos += parseInt(valor);
    // }
};


// Eventos


// Referencias del DOM
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');

let puntosJugador = 0;

// Referencias del DOM
const btnPedir = document.querySelector('#btnPedir');
// Cuando hago click en el evento escuchar se dispara el callback

btnPedir.addEventListener('click',  () => {

    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/5C.png" alt=""></img>
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

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

// Turno de la computadora
const divCartaComputadora = document.querySelector('#computadora-cartas');
let puntosComputadora = 0;
const turnoComputadora = ( puntosJugador ) => {

    console.log(puntosJugador);

    do{
        const carta = pedirCarta();
        puntosComputadora += valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta');
        divCartaComputadora.append(imgCarta);

        if( puntosComputadora < 21 && puntosJugador <= 21){
            console.warn('Jugador gáno');
        } else if( puntosComputadora > 21 && puntosJugador <= 21){
             console.warn('Jugador gáno');
        }
    

        if( puntosJugador > 21){
            break;
        }

    }while( (puntosComputadora <= puntosJugador ) && ( puntosJugador <= 21 ));

};


const btnDetener = document.querySelector('#btnDetener');

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
})

