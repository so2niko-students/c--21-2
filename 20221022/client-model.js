export default class ClientModel{
    url = 'http://127.0.0.1:8080/';

    constructor(loadCallback){
        this.loadCallback = loadCallback;
    }

    sendReq({a, b}){
        const urlReq = `${ this.url }?a=${ a }&b=${ b }`;
        const ajax = new XMLHttpRequest();

        ajax.addEventListener('load', () => {
            this.loadCallback(ajax.responseText);
        });

        ajax.open('GET', urlReq);
        ajax.send();
    }
}