function AddOrRemoveFromArray(input) {
    let result=[];
    for (let i = 0; i < input.length; i++) {
        if (input[i]==="add"){
            result.push(i+1);
        }
        if(input[i]==="remove"){
            result.pop();
        }
    }
    if (result.length===0){
        console.log("Empty");
    }
    else{
        for (let m = 0; m < result.length; m++) {
            console.log(result[m]);
        }
    }
}