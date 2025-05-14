const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = './pages' + (req.url === '/' ? '/index.html' : req.url + '.html');
    let absPath = path.resolve(__dirname, filePath);

    fs.readFile(absPath, (err, data) => {
        if (err) {
            // Page not found
            fs.readFile('./pages/404.html', (error404, data404) => {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(data404);
            });
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    
});
