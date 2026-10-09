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


crearDeck();