//callback hell vs promises
function callbackHell() {
    setTimeout(() => {
        console.log("first callback");
        setTimeout(() => {
            console.log("second callback");
            setTimeout(() => {
                console.log("third callback");
            }, 1000)
        }, 1000)
    }, 1000)
}

async function promiseChain() {
    const secondPromse = new Promise((resolve) => {
        setTimeout(() => {
            console.log("first promise");
            resolve();
        }, 1000)
    })
        .then(() => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Second Promise");
                    resolve("value");
                }, 1000)
            })
        })

    const reference = await secondPromse;

    return new Promise((resolve) => {
        console.log(reference)
        setTimeout(() => {
            console.log("third promise");
            resolve();
        }, 1000);
    });
}

//callbackHell();

promiseChain();
