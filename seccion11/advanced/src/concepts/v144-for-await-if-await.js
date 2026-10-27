// @ts-nocheck
import { heroes } from '../data/heroes';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    // Ejemplo 1: If Await
    // const id1 = '5d86371f2343e37870b91ef1';

    // if( await getHeroAsync(id1) ){
    //     element.innerHTML = "Si existe";
    //     return;
    // }
    
    // element.innerHTML = "No existe";

    // Ejemplo 2: for awai
    const herosIds = heroes.map( hero => hero.id);

    const heroesPromises = getHeroesAsync( herosIds);

    for await( const hero of heroesPromises){
        element.innerHTML += `${ hero.name }<br/>`;
    }

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 500)
    });

    return heroes.find( hero => hero.id === id );
}