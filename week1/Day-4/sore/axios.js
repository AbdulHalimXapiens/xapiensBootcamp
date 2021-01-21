const axios = require('axios');
const fill = [];

function getPost() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const data1 = response.data;
            console.log(data1);
        })
}

function getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const data2 = response.data;
            console.log(data2);
        })
}

const isi = axios.all([getPost(), getUsers()])

// fill.push(isi);
// isi.concat();
console.log(isi);