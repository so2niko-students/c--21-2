import ClientModel from "./client-model.js";
import ClientView from "./client-view.js";

export default class ClientController{
    constructor(){
        this.model = new ClientModel(this.handleSuccessLoad);
        this.view = new ClientView(this.handleClickCalc);
    }

    handleClickCalc = () => {
        const ab = this.view.getAB();
        this.model.sendReq(ab);
    }

    handleSuccessLoad = (data) => {
        this.view.renderAnswer(data);
    }
}

export function hello(){
    console.log('hello');
}

export const el = 232;