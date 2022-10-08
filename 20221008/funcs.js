//!Функції

// console.log(sum(1, 3));


//function declaration - Hoisting
// function sum(a, b){
//     return a + b;
// }

//function expression
const pow = function(x, p){
    return Math.pow(x, p);
}

// console.log(pow(2, 3));
two = 22;
console.log(two);
//! let, const, var
one = 1; //BAD PRACTICE
var two = 2; // Є всплиття змінної - Hoisting
let three = 3;
const four = 4;

//let & const have block scope - loops, conditions, functions

// four = 44;


console.log(three);

/*
Number 33, 22, 0, -23, -23.66, 5423534.4454435435435, -12423.3
String "Hello", 'Bye', `245jlkjsfsadf kajsdflkadjsf` - template strings
Boolean true, false
undefined
null
Object
Big Int  324234n
Symbol
*/

console.log(`I have ${ one } kids`);

let a = 3;
let b = a;
a = 4;
console.log('b', b);

let c = {
    name : 'Nick',
    age : 31,
    languages : [
        'c', 'c++', 'c#', 'java', 'pascal', 'php', 'algol', 'basic', 'assembler', 'js'
    ]
};

let d = c;

d.name = 'Mykola';

d.languages.sort();

console.log(c);
console.log(d);
console.log(d == c);


for(var i = 0; i < 10; i++){
    console.log(i);
}

for(let j = 0; j < 10; j++){
    console.log('j', j);
}

console.log('I: ', i);
// console.log('J: ', j);

//? ARROW functions

const divider = function(a, b){
    console.log(this);
    console.log(arguments);
    let answer = a;
    const argLen = arguments.length;
    for(let i = 1; i < argLen; i++){
        answer -= arguments[i];
    }
    return answer;
}
// const divider = (a, b) => {
//     return a - b;
// }
// const divider = (a, b) => a - b;

const doubler = (d = 1) => d * 2;

//this, arguments

console.log(divider(3, 1, 34, 43, 12, 43, 5654, 123, 545, 2));

 class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(this);
        console.log(arguments);
        console.log(`${ this.name }: Hello!`);
    }

    sayHello2 = () => {
        console.log(this);
        console.log(`${ this.name }: Hello!`);
    }
 }

 const me = new Human('Nick', 31);
 const yaroslav = new Human('Yaroslav', 38);

//  me.sayHello();
//  me.sayHello2();
//  yaroslav.sayHello();
//  yaroslav.sayHello2();

console.clear();

document.querySelector('.nick').addEventListener('click', me.sayHello);
document.querySelector('.nick2').addEventListener('click', me.sayHello2);

// console.log(doubler(2));
// console.log(doubler());

const nums = [1,2,3,4];
// console.log(...nums);

const info = function(args){
    [...arguments].forEach(console.log);
}

// info(1);
// info(1, 2);
// info(1, 2, 3);
// info(1, 2, 3, 4, 'Hello', { t : 22 });

