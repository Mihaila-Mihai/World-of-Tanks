const http = require('http');
const fs = require('fs');


const requestListener = function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);

    fs.readFile('data/file.json', 'utf8', (err, data) => {
        if (err) { return err; }
        res.end(data);

    })
}

const server = http.createServer(requestListener);

server.listen(8080, function() {
    console.log("Serverul este pornit pe portul 8080")
});