const fs = require('fs');
const { todayString } = require('./todayStr');

const LOG_FILE = 'log.txt';

exports.log = function(url, result){
    const todayStr = todayString();

    const logString = `${ todayStr }, query: "${ url }", answer: "${ result }"\n`;

    fs.appendFile(LOG_FILE, logString, (err) => {
        if (err) throw err;
    });
}