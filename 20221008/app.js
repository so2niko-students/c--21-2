//AJAX
//JSON

const READY_STATE = ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'];

const ajax = (url, cat = () => {}) => {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', () => cat(xhttp.responseText));

    xhttp.addEventListener('readystatechange', () => {
        console.log('ready state: ', xhttp.readyState, READY_STATE[xhttp.readyState]);
        console.log('status: ', xhttp.status);
        console.log('text: ', xhttp.responseText);
        console.log('---------------------');
    });

    xhttp.open('GET', url);
    xhttp.send();
}

const handleJSONFunc = objStr => {
    console.log('handleJSONFunc');
    const obj = JSON.parse(objStr);
    console.log(obj);
}

ajax('hello.txt');
ajax('data.json', handleJSONFunc);

one = 1.1;

// console.log(`READY_STATE: ${ READY_STATE.reduce((acc, el, i) => `${ acc }
//     ${ i } : ${ el }`, '') }
// `);