const promise = new Promise(function(resolve, reject) {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            resolve,
            console.log(i);

        }, 1000);
    }
})

console.log('Done')

Promise.all([Promise]).then(function(values) {
    console.log(values)
})