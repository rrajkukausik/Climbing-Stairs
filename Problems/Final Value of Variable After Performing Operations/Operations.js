var finalValueAfterOperations = function (operations) {
    let result = 0;
    operations.forEach((operation) => {
        switch (operation) {
            case "X++": result = result + 1; break;
            case "++X": result = result + 1; break;
            case "X--": result = result - 1; break;
            case "--X": result = result - 1; break;
        }
    })
    return result;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));