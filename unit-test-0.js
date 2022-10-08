const sum = (...args) => {
    return args.reduce((acc, el) => {
        if(typeof el != 'number') return acc;
        return acc + el;
    }, 0);
}

console.log(sum(1,2) === 3 ? '💚' : '❌', 'sum(1,2) === 3');
console.log(sum(0,0) === 0 ? '💚' : '❌', 'sum(0,0) === 0');
console.log(sum(1,2,3) === 6 ? '💚' : '❌', 'sum(1,2,3) === 6');
console.log(sum() === 0 ? '💚' : '❌', 'sum() === 0');
console.log(sum(1) === 1 ? '💚' : '❌', 'sum(1) === 1');
console.log(sum('n', 3, 5) === 8 ? '💚' : '❌', 'sum("n", 3, 5) === 8');
console.log(sum({}, 3) === 3 ? '💚' : '❌', 'sum({}, 3) === 3');

const result = (func, a, b, c) => {
    return func(a, b) * c;
}

console.log(result(sum, 1, 2, 3));