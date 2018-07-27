function ancientVsMemory(arr) {
    let numsArr=arr.join(' ').split(' ');
    for (let i = 0; i < numsArr.length; i++) {
        if(numsArr[i]==='32656' && numsArr[i+1]==='19759' && numsArr[i+2]==='32763'){
            let size=Number(numsArr[i+4]);
            let copy=numsArr.slice(i+6,i+6+size);
            console.log(copy.map(st => String.fromCharCode(st)).join(''))
        }
    }
}