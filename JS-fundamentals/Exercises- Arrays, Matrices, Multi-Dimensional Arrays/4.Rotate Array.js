function rotateArray(input) {
    let rotations= Number(input[input.length - 1]);
    let print = input.slice(0, input.length - 1);
    for (let i = 0; i < rotations % print.length; i++) {
        let lastNum=print.pop();
        print.unshift(lastNum);
    }
    console.log(print.join(' '));
}