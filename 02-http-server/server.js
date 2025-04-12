const http = require('http');

const fs = require('fs');
const path = require('path');
//create a server

// http.createServer((req, res) => {
//     res.write('this is node js');
//     res.end();
// }).listen(3000, () => {
//     console.log( 'Server is running on port 3000');
// });

// render an json response
// const server = http.createServer((req, res) => {
//         res.writeHead(200, {'Content-Type': 'application/json'});

//         res.end("<h1>Hello World</h1>");
//     });

//render an html page
const server = http.createServer((req, res) => {
    //rendering content

    if(req.url === '/') {
        fs.readFile(path.join(__dirname,"views", 'index.html'), "utf8", (err, data) => {
            if(err) throw err;
    
        res.writeHead(200, {'Content-Type': 'text/html'});
    
        res.end(data);
        });
    }

    if(req.url === '/about') {
        fs.readFile(path.join(__dirname,"views", 'about.html'), "utf8", (err, data) => {
            if(err) throw err;
    
        res.writeHead(200, {'Content-Type': 'text/html'});
    
        res.end(data);
        });
    }
    
});

// const PORT = 3001; 
// if we depoloy then include process.env.PORT || 3001

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
