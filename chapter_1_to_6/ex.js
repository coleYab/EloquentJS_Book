function every(predicate, array) {
    for (let et of array)
        if (!predicate(et))
            return false;
    return true;
}


function otherEvery(predicate, array) {
    return (!array.some(predicate));
}
