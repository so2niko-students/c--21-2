const rand = require('./common/rand');
const url = require("url");

exports.model = function(req){
    const { random, a, b} = url.parse(req.url, true).query;

    if(random == "color"){
        return rand.color();
    }

    if(random == "number"){
        return rand.range(0, 100);
    }

    if(random == "range"){
        if ((a !== "") && (b !== "") && (a < b)){
            return rand.range(a, b);
        }        
    }

    return "error_input";
}