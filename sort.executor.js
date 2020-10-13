const {workerData, parentPort} = require('worker_threads')



function sort(array) {
    const length = array.length;

    let swapped = false;

    for(let i = 0; i < length; i++) {
        swapped = false;
        for(let j = 0; j< length - i - 1; j++) {
            if(array[j] > array[j + 1]) {
                const tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp
                swapped = true;
            }
        }
        if(!swapped) {
            break
        }
    }
        return array;
}


parentPort.postMessage(
    sort(workerData.value)
)
