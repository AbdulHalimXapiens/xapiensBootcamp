function repeatLetter(text, times) {
    let tampung = text.split(" ");
    let result = '';

    for (let i = 0; i < tampung.length; i++) {
        let kata = tampung[i];
        for (let j = 0; j < kata.length; j++) {
            for (let k = 0; k < times; k++) {
                result += kata[j];
            }
        }
        result += ' ';

    }
    let hasil = result.trim();
    return hasil;
}

repeatLetter('Hello World', 2);

module.exports = repeatLetter;