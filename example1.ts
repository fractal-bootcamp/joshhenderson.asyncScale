//create a sync function
function syncFunction() {
    console.log("sync function executed");
}
// create an async function w/ set timeout

function asyncFunction() {
    setTimeout(() => {
        console.log("async function executed");
    }, 5000);
}

//call both functions and add a console.log after: 

syncFunction();
asyncFunction();
console.log("code after function calls");