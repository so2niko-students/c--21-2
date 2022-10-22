const testData = ["bitcoin take over the world maybe who knows perhaps",    
"turns out random test cases are easier than writing out basic ones",
"lets talk about javascript the best language",
"i want to travel the world writing code one day",
"Lets all go on holiday somewhere very cold"];

const shortestWord = str => Math.min(...str.split(' ').map(w => w.length));

testData.forEach(t => console.log(shortestWord(t)));