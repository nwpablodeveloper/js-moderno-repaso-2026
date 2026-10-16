
/**
 * 
 * @param {Array<String>} deck
 * @returns la ultima carta del array Deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}