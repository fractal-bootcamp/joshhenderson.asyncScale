self.onmessage = function (event) {
    const number = event.data.number;
    let result = 0;

    //simulate a CPU-intensive task
    for (let i = 0; i < 1000000000; i++) {
        result += Math.sqrt(number);
    }

    self.postMessage(result);
};