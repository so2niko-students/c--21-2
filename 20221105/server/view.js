exports.view = function(res, result){
    res.writeHead(200, { 
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin" : '*' 
    });

    res.write(String(result));
    res.end();
}