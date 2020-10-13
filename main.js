const {
    Worker,
    isMainThread
} = require('worker_threads')

function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(() => Math.round(Math.random() * max))
}


if (isMainThread) {
    const input = randomArray(100, 200);

    const worker = new Worker('./sort.executor.js', {
        workerData: {
            value: input
        }
    });

    worker.on('message', result => {
        console.log(result)
    })

    worker.on('exit', code => {
        if(code !== 0) throw new Error(`worker stopped with exit code ${code}`);
        else console.log(`worker stopped ${code}`)
    })
}