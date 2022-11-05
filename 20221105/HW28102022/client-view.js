export default class ClientView{
    constructor(clickCallback){
        this.clickCallback = clickCallback;

        document.querySelector('.rendom-number').addEventListener('click', this.clickCallback);
        document.querySelector('.rendom-number1').addEventListener('click', this.clickCallback);
        document.querySelector('.rendom-number2').addEventListener('click', this.clickCallback);
    }

    GetData(event){
        return event.target.innerText;
    }

    renderResult(data){
        document.querySelector('.result-rendom-number').innerText = data;
    }

    renderBackgroundColor(color){
        document.body.style.background = color;
    }

    GetNumbers(){
        let oneNumber = document.querySelector('.one-number').value;
        let twoNumber = document.querySelector('.two-number').value;
        return {oneNumber, twoNumber};
    }

    ShowError(){
        window.alert("Error!\nPlease check input numbers!");
    }

}