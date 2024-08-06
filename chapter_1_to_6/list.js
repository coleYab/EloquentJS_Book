//
// object  {value: value, next: list}
//
function createNode(value, next) {
    return {
        value: value,
        next: next
    };
}

function insertHead(value, list) {
    const new_list = createNode(value, list);
    return new_list;
}

function arrayToList(array) {
    let list = null;

    for (let idx = array.length - 1; idx >= 0; idx--) {
        list = insertHead(array[idx], list);
    }

    return list;
}


function printList(list) {
    for (let cur = list; cur !== null; cur = list.next) {
        console.log(`${cur.value} ==> `);
    }
    console.log('null');
}


function main() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8,9];

    const list = arrayToList(array);

    console.log(list);
}


main()
