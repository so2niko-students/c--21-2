export default class ClientModel{
    url = 'http://127.0.0.1:8000/?random=';

    constructor(loadCallback){
        this.loadCallback = loadCallback;
    }

    sendReq(id, varOrCallback){
        const url = `${this.url}${id}`;
        if(id == "number"){
            this.#sendReq(url, this.loadCallback);
            return;
        }

        if(id == "color"){
            this.#sendReq(url, varOrCallback);
            return;
        }

        if(id == "range"){
            let { oneNumber, twoNumber } = varOrCallback;
            let urlR = `${url}&a=${oneNumber}&b=${twoNumber}`;

            this.#sendReq(urlR, this.loadCallback);
            return;
        }
    }

    #sendReq(url, callback){
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('load', () => callback(ajax.responseText));

        ajax.open('GET', url);
        ajax.send();
    }

    checkNumbers(numbers){
        let { oneNumber, twoNumber } = numbers;
        if(oneNumber == "" || twoNumber == "" || twoNumber<=oneNumber){
            return false;
        }
        return true;
    }
}