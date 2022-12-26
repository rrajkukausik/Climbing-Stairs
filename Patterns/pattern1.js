//     *****
//     *****
//     *****
//     *****
//     *****

const pattern = (n) => {
    let output = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            output += '*';
        }
        output += '\n';
    }
    return output;
}

console.log(pattern(6));