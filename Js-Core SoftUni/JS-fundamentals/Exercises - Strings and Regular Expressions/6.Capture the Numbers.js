function captureNumbers(input) {
    let regex=/\d+/g;
    let text=input.join(' ');
    let numbes=text.match(regex);
    console.log(numbes.join(' '));
}