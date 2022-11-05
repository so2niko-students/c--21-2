const http = require("http");
const { log } = require('./common/log');
const { model } = require('./model');
const { view } = require('./view');

http.createServer(function (req, res) 
{
    const result = model(req);

    log(req.url, result);

    view(res, result);
}).listen(8000);