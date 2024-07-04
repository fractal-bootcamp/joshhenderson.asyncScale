// error handling in Async Operations

// create a function that simulates an async operation with a success/fail condition 
function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Operation successful");
            } else {
                reject(new Error("----------operation failed"));
            }
        }, 1000);
    });
}

// create an async function to handle errors:

async function handleAsyncErrors() {
    try {
        console.log(await simulateAsyncOperation(true));
        console.log(await simulateAsyncOperation(false));
    } catch (error) {
        console.error("caught an error: ", error.message);
    }
    console.log("Continuing after error");
}

handleAsyncErrors()