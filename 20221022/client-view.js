export default class ClientView{
    domElements = {
        btn     : document.querySelector('.btn-calc'),
        inpA    : document.querySelector('.inp-a'),
        inpB    : document.querySelector('.inp-b'),
        answer  : document.querySelector('.answer'),
    }
    
    constructor(clickCallback){
        this.clickCallback = clickCallback;

        this.domElements.btn.addEventListener('click', this.clickCallback);
    }

    getAB(){
        const a = this.domElements.inpA.value;
        const b = this.domElements.inpB.value;
        return { a, b };
    }

    renderAnswer(data){
        this.domElements.answer.innerText = data;
    }
}