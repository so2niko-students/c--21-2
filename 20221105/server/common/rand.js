const { f2L } = require('./f2l');

function randRange(from, to){
    return parseInt(Math.random() * (to - from) + from);
}

function getRandomHex(){
    return f2L(randRange(0, 256).toString(16));
}

function color(){
    const red = getRandomHex();
    const green = getRandomHex();
    const blue = getRandomHex();

    const color = `#${ red }${ green }${ blue }`;
    return color;
}

exports.color = color;
exports.range = randRange;