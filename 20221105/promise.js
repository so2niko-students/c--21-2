const url = 'https://randomuser.me/api';

class Log{
    static #counter = 0;
    static #start;

    static log(txt){
        if(Log.#counter == 0){
            Log.#start = Date.now();
        }
    }
}


const myAjax = function(url) {
    const pr = new Promise((res, rej) => {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('load', () => res(ajax.responseText));
        
        ajax.open('GET', url);
        ajax.send();
    });

    return pr;
}

console.log('1 - BEFORE PROMISE, BEGIN');

const simpleExample = new Promise((res) => {
    console.log('2 - IN PROMISE, BEGIN');
    const ajax = new XMLHttpRequest();
    ajax.onload = () => {
        console.log('6 - IN PROMISE, ONLOAD');
        res(ajax.responseText);
    }

    ajax.open('GET', url);
    ajax.send();
    console.log('3 - IN PROMISE, END');
});

console.log('4 - AFTER PROMISE');

simpleExample.then((d) => {
    console.log('7 - IN THEN');
    console.log(d);
});

console.log('5 - AFTER THEN');

// myAjax(url).then(d => console.log(JSON.parse(d))).catch(r => console.error(r)).finally(() => console.log('end of request'));

// myAjax(url).then(d => console.log(JSON.parse(d)));

// fetch(url).then(r => r.json()).then(d => console.log(d));

async function load(url){
    const r = await fetch(url);
    const d = await r.json();
    console.log(d);
}

// load(url);

// axios(url).then(o => console.log(o.data));