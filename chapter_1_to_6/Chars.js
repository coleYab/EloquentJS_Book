function countChars(string, char) {
    let count = 0;

    for (let c of string) {
        if (char === c)
            count++;
    }

    return count;
}

console.log("====================");
console.log(countChars("BBB", 'B'));
console.log("==========")
