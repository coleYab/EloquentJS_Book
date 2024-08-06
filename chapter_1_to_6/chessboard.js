function drawChessBoard(size) {
    for (let x = 0; x < size; x++) {
        let text = "";
        for (let y = 0; y < size; y++) {
            if ((x + y) % 2 === 0)
                text += "#";
            else
                text += " ";
        }
        console.log(text);
    }

}


drawChessBoard(9);
console.log("========================");
drawChessBoard(8);
console.log("========================");
drawChessBoard(7);
console.log("========================");
drawChessBoard(5);
console.log("========================");
