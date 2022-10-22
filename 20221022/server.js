const http = require("http");
const url = require("url");

http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    console.log(Date.now(), req.url);
    const a = q.query.a;
    const b = q.query.b;
    let data = '';
    if(a && b){
        data = `${ Number(a) + Number(b) }`;
    }    

    res.writeHead(200, { 
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin" : '*' 
    });
    res.write(data);
    res.end();
}).listen(8080);
