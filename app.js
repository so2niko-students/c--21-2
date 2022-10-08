//AJAX
//JSON

const READY_STATE = ['UNSENT', 'OPENED', 'HEADERS_RECEIVED', 'LOADING', 'DONE'];

const ajax = (url, cat) => {
    const xhttp = new XMLHttpRequest();
    xhttp.addEventListener('load', cat);

    xhttp.addEventListener('readystatechange', () => {
        console.log('ready state: ', READY_STATE[xhttp.readyState]);
        console.log('status: ', xhttp.status);
        console.log('text: ', xhttp.responseText);
        console.log('---------------------');
    });

    xhttp.open('GET', url, true);
    xhttp.send();
}

const handleJSONFunc = ev => {

}

// ajax('hello.txt');
// ajax('data.json');

one = 1.1;

// console.log(`READY_STATE: ${ READY_STATE.reduce((acc, el, i) => `${ acc }
//     ${ i } : ${ el }`, '') }
// `);