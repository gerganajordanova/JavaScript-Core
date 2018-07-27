function calcCompoundInterest(arr) {
    arr = arr.map(Number);
    let p=arr[0];
    let i=arr[1];
    let n=arr[2];
    let t=arr[3];
    let compoundInterest = p * Math.pow(1 + i/(100*( 12/n)), 12/n * t);
    console.log(compoundInterest.toFixed(2));
}