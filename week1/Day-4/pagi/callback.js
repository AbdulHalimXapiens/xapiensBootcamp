function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = randomInt(200, 1000);
let b = randomInt(200, 1000);
let c = randomInt(200, 1000);

function save(callback) {
    setTimeout(() => {
        callback(`save cloud dengan delay ${a} ms`);
    }, a)
}

function send(callback) {
    setTimeout(() => {
        callback(`Send notif dengan delay ${b} ms`);
    }, b)
}

function fetch1(callback) {
    setTimeout(() => {
        callback(`Fetch news dengan delay ${c} ms`);
    }, c)
}

save((s) => {
    console.log(s);
    send((s2) => {
        console.log(s2);
        fetch1((s3) => {
            console.log(s3);
        })
    })
})