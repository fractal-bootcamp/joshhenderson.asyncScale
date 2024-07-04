//create a function for sequential fetch operations
async function squentialFetch() {
    const start = Date.now();
    const response1 = await fetch('localhost:3005');
    const response2 = await fetch("localhost:3005/other");
    console.log(`Sequential fetch took ${Date.now() - start} ms`);
}

async function parallelFetch() {
    const start = Date.now();
    const [response1, response2] = await Promise.all([
        fetch("localhost:3005/"),
        fetch("localhost:3005/other")
    ]);
    console.log(`Parallel fetch took ${Date.now() - start} ms`);
}

squentialFetch();
parallelFetch();

