function extractSubsequence(input) {
    input = input.map(Number);

    let result = input.filter((x, i) => x >= Math.max(...input.slice(0, i + 1))).join('\n');

    console.log(result);
}