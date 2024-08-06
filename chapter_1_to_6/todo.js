const todoList = [];
const str = "";

function remember(task) {
    todoList.push(task);
}

function getTask() {
    todoList.shift();
}



function rememberUrgently(task) {
    todoList.unshift(task);
}



