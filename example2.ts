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

function promiseChain() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("first promise");
            resolve();
        }, 1000)
    })
        .then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("Second Promise");
                    resolve();
                }, 1000)
            })
        })
        .then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("third promise");
                    resolve();
                }, 1000);
            });
        });
}

//callbackHell();

promiseChain();
