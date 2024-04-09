const fs = require('fs');

// // const roadStream = fs.createReadStream(`${__dirname}/bigData.txt`); // create a stream object.
// // Output is a buffer.
// const outReadStream = fs.createReadStream(`${__dirname}/bigData.txt`); // create a stream object.
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`); // create a stream object.
// // Output is a string.

// // roadStream.on('data', (chunk) => {
// //     console.log(chunk);
// // });

// outReadStream.pipe(ourWriteStream)
// console.log('hello world');

const http = require('http');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, 'utf8');
    // ------ req is a readable stream and res is a writable stream. ------
    myReadStream.pipe(res);

});

server.listen(3000);

console.log('listening on port 3000');

