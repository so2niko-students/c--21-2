const url = 'https://randomuser.me/api';

const myAjax = function(url) {
    const pr = new Promise((res, rej) => {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('load', () => res(ajax.responseText));
        
        ajax.open('GET', url);
        ajax.send();
    });

    return pr;
}

// myAjax(url).then(d => console.log(JSON.parse(d))).catch(r => console.error(r)).finally(() => console.log('end of request'));

// myAjax(url).then(d => console.log(JSON.parse(d)));

// fetch(url).then(r => r.json()).then(d => console.log(d));

async function load(url){
    const r = await fetch(url);
    const d = await r.json();
    console.log(d);
}

// load(url);

axios(url).then(o => console.log(o.data));