async function asyncAwaitExample() {
    console.log("start of async function");

    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("After 1 second");

    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("After 2 second");

    console.log("end of async function");
}

asyncAwaitExample();

console.log("Code after async function call");