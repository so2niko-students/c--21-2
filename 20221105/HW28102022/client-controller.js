import ClientModel from "./client-model.js";
import ClientView from "./client-view.js";

export default class ClientController{
    constructor(){
        this.view = new ClientView(this.handlClick);
        this.model = new ClientModel(this.handlRespond);
        this.ready();
    }
    
    handlClick = (event) => {
        let dataId = event.target.dataset.id;

        switch(dataId){
            case "number":
                this.model.sendReq(dataId);
                break;
            case "color":
                this.model.sendReq(dataId, this.handlRespondColor);
                break;
            case "range":
                let numbers = this.view.GetNumbers();
                let isValid = this.model.checkNumbers(numbers);
                if(!isValid){
                    this.view.ShowError();
                }
                this.model.sendReq(dataId, numbers);
                break;
        }
    }

    handlRespond = (data) => {
        this.view.renderResult(data);
    }

    handlRespondColor = (data) => {
        this.view.renderBackgroundColor(data);
        this.view.renderResult(data);
    }

    ready = () => {
        this.model.sendReq("color", this.handlRespondColor);
    }
}