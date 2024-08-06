function range(start, end, diff = 1) {
    const arr = [];
    const next = current => current + diff;
    const isEnd = (current, end, diff) => (diff > 0) ? (current < end) : (current > end);


    if (
        (start > end && diff > 0) ||
        (start < end && diff < 0) ||
        diff === 0)
        throw new Error(`Invalid range is given`);

    for (let current = start; isEnd(current, end, diff); current = next(current))
        arr.push(current);

    return arr;
}

function reverse(array) {
    for (let start = 0, end = array.length - 1; start < end; start++, end--) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;
    }

    return array;
}
