// @ts-nocheck
import { heroes } from './../data/heroes'

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitNoSecuencialComponente = async ( element ) => {

    console.time('Start');

    element.innerHTML = `Loading...`;

    // Forma secuencial
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    const [ value1, value2, value3 ] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `
        Value1: ${ value1 } <br/>
        Value2: ${ value2 } <br/>
        Value3: ${ value3 } <br/>
    `;

    console.timeEnd('Start');
}



const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve(`Slow Promises`)
    }, 2000);
});

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve(`Medium Promises`)
    }, 1000);
});

const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve(`Fast Promises`)
    }, 250);
});