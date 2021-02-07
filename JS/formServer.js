const http = require('http');
const fs = require('fs');
const url = require('url');
const queryString = require("querystring");
let body = "";

const requestListener = function(req, res) {
    body = '';


    let objURL = url.parse(req.url, true);
    if (objURL.pathname == '/save') {
        req.on('data', function(date) {
            body += date;
        });
        console.log(body);

        req.on('end', function() {
            console.log("cerere");
            var ob_body = queryString.parse(body);
            console.log(ob_body);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.write("<html><body><p>Thank you, " + ob_body.fname + " " + ob_body.lname);

            res.end();

            //res.writeHead(200);

            if (fs.existsSync("data/feedback.json"))

            {
                var date = fs.readFileSync("data/feedback.json");
                ob = JSON.parse(date);
            } else
                ob = [];
            ob.push(ob_body);
            fs.writeFileSync("data/feedback.json", JSON.stringify(ob));



        });



    }





    //res.end('hei');
}

const server = http.createServer(requestListener);

server.listen(8081, function() {
    console.log("Serverul este pornit pe portul 8081")
});