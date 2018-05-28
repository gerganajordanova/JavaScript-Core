function sortArray(input) {
    let sorted=input.sort().sort((a,b) => a.length > b.length);
    console.log(sorted.join('\n'));
}