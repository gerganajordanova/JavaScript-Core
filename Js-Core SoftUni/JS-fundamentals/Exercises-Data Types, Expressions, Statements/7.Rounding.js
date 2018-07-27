function rounding(arr) {
    let numberToRound=Number(arr[0]);
    let precision=Number(arr[1]);
    if (precision>15){
        precision=15;
    }
    numberToRound=numberToRound.toFixed(precision);
    console.log(Number(numberToRound));
}