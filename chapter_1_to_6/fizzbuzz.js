function fizzBuzz(num) {
    for (let i = 0; i <= num; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}


fizzBuzz(2);
console.log("==================");
fizzBuzz(9);
console.log("==================");
fizzBuzz(20);
console.log("==================");
