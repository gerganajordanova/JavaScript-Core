(function () {
    let sum=0;

    function addNum(num) {
        sum+=num;
        return addNum;
    }

    addNum.toString=()=>sum;
    return addNum;
}) ();