const http = require('http');
const fs = require('fs');

const moduleConfig = require('./mmodule/config.js');

http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end('<h1>Hello Node Js With Module</h1>');

    fs.readFile('./home.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    })
}).listen(moduleConfig.port);