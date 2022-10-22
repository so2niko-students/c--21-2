const show = t => {
    const d = Date.now();
    const info = `${ d } -- Message: ${ t }`;
    console.log(info);
}

// show('hello');
// show('hello');

const counter = () => {
    let i = 0;
    i++;
    return i;
}

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

let glA = 2;

function counterCreator(){
    let i = 0;

    function counter(){
        i++;
        return i;
    }

    return counter;
}

const counter2 = counterCreator();

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());