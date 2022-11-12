//Класово
class Coffee{
    static #counter = 0;
    #UID = this.#generateUID();
    #sort;

    static get counter(){
        return Coffee.#counter;
    }

    constructor(sort, roasting, roastingDate, countryFrom){
        Coffee.#counter++;
        
        this.#sort = sort;
        this.roasting = roasting;
        this.roastingDate = roastingDate;
        this.countryFrom = countryFrom;
    }

    daysAfterRoasting(){
        const now = Date.now();
        const roasting = new Date(this.roastingDate);
        const time = now - roasting;
        const days = Math.floor(time / 1000 / 60 / 60 / 24);
        return days;
    }

    getUID(){
        return this.#UID;
    }

    get sort(){
        return this.#sort;
    }

    set sort(newSort){
        const sorts = ['arabica', 'robusta', 'blend'];
        if(sorts.includes(newSort)){
            this.#sort = newSort;
        }else{
            console.log(`%cERROR, waiting for ${ sorts }, received ${ newSort }`, 'color: red; background-color: white; padding: 15px;');
        }
    }

    #generateUID(){
        return Math.floor(Math.random() * 1000000000).toString(16);
    }
}

const c1 = new Coffee('arabica', '4', '2022-07-07', 'Brazil');
const c2 = new Coffee('arabica', '4', '2022-07-07', 'Brazil');
const c3 = new Coffee('arabica', '4', '2022-07-07', 'Brazil');
console.log(c1);

class DripPacket extends Coffee{
    constructor(sort, roasting, roastingDate, countryFrom, isNew){
        super(sort, roasting, roastingDate, countryFrom);
        this.isNew = isNew;
    }

    daysAfterRoasting(){
        const days = super.daysAfterRoasting();
        return days + 1;
    }
}


//Прототипно
//Функція-конструктор
function Tea(type, typePackaging, countryFrom, packingDate){
    this.type = type;
    this.typePackaging = typePackaging;
    this.countryFrom = countryFrom;
    this.packingDate = packingDate;

    function generateUID(){
        return Math.floor(Math.random() * 1000000000).toString(16);
    }
    //Closure - замикання
    const UID = generateUID();

    this.daysAfterPacking = function(){
        const now = Date.now();
        const packingDate = new Date(this.packingDate);
        const time = now - packingDate;
        const days = Math.floor(time / 1000 / 60 / 60 / 24);
        return days;
    }

    this.getUID = function(){
        return UID;
    }

    this.examplesOfUID = function(){
        return new Array(10).fill(1).map(() => generateUID());
    }
}

const t1 = new Tea('black', 'dry', 'India', '2021-11-11');
console.log(t1);
console.log(t1.daysAfterPacking());
t1.type = 'green';
console.log(t1.type);
console.log(t1.examplesOfUID());

function TeaPacket(type, typePackaging, countryFrom, packingDate, isNew){
    // super(type, typePackaging, countryFrom, packingDate);

}

TeaPacket.prototype = Tea;