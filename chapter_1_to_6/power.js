function power(base, exponent) {
    if (exponent === 0)
        return 1;
    else if (exponent < 0)
        return power(base, exponent + 1) / base;
    return power(base, exponent - 1) * base;
}


console.log(power(2, 2));
console.log(power(9, 2));
console.log(power(9, -2));
console.log(power(1, 2));
console.log(power(7, 2));
