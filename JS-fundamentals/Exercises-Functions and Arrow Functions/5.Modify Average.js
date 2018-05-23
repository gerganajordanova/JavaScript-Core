function modifyAverage(num) {
    let numString=num.toString();
    let sum=sumOfDigits(numString);

    while (sum/numString.length<=5){
        numString+='9';
        sum=sumOfDigits(numString);
    }
    console.log(numString);
    function sumOfDigits(numString) {
        let sum=0;
        for (let digit of numString) {
            sum+=Number(digit);
        }
        return sum;
    }
}