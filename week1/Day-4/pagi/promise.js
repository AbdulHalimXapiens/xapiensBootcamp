function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = randomInt(200, 1000);
let b = randomInt(200, 1000);
let c = randomInt(200, 1000);

const save = () => {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(resolve, a, `save cloud dengan delay ${a} ms`);
    })

    return promise;
}

const send = () => {
    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(resolve, b, `Send notif dengan delay ${b} ms`);
    })

    return promise2;
}

const fetch1 = () => {
    let promise3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, c, `Fetch news dengan delay ${c} ms`);
    })

    return promise3;
}

Promise.all([save(), send(), fetch1()]).then(function(values) {
    console.log(values.join("\n"))
})