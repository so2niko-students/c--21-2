const { f2L } = require('./f2l');

exports.todayString = function(){
    const today = new Date();
    const dd    = f2L(today.getDate());
    const mm    = f2L(today.getMonth() + 1);
    const yyyy  = today.getFullYear();
    const h     = f2L(today.getHours());
    const m     = f2L(today.getMinutes());
    const s     = f2L(today.getSeconds());
    
    const todayStr = `${ mm }/${ dd }/${ yyyy } ${ h }:${ m }:${ s }`;
    return todayStr;
}