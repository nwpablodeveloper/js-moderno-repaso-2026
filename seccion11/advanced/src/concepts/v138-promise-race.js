// @ts-nocheck

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponente = ( element ) => {

    element.innerHTML = 'Loading...';
    
    const renderValue = ( value ) => {

        element.innerHTML = value; 

    }

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])
    .then( renderValue );

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