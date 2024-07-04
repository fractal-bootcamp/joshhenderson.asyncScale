// create a function that returns a promise resolving after a given timeout: 
function asyncOperationWithTimeout(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Operation completed in ${timeout}ms`);
        }, timeout);
    });
}

// create a function using Promise.race():

async function raceExample() {
    const result = await Promise.race([
        asyncOperationWithTimeout(2000),
        asyncOperationWithTimeout(1000),
        asyncOperationWithTimeout(5000)
    ]);
    console.log(result);
}

raceExample()