// error handling in Async Operations

// create a function that simulates an async operation with a success/fail condition 
function simulateAsyncOperation(shouldSucceed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve("Operation successful");
            } else {
                reject(new Error("operation failed"));
            }
        }, 1000);
    });
}