function checkingValidity(arr) {
    let x1=Number(arr[0]);
    let y1=Number(arr[1]);
    let x2=Number(arr[2]);
    let y2=Number(arr[3]);

    function check(x1,y1,x2,y2) {
        let deltaX=x2-x1;
        let deltaY=y2-y1;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if(distance % 1 == 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    check(x1, y1, 0, 0);
    check(x2, y2, 0, 0);
    check(x1, y1, x2, y2);
}
