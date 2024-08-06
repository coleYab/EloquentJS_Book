function min(a, b) {
    return (a < b) ? a : b;
}

function max(a, b) {
    return (a > b) ? a : b;
}

function add(a, b) {
    return a + b;
}

// Recursive function
function isEven(number) {
    let newNumber = (number >= 0) ? number : -number;
    if (newNumber === 0)
        return true;
    if (newNumber === 1)
        return false;
    return isEven(newNumber - 2);
}

console.log("============================");
console.log(isEven(2));
console.log("============================");
console.log(isEven(1));
console.log("============================");
console.log(isEven(0));
console.log("============================");
console.log(isEven(5));
