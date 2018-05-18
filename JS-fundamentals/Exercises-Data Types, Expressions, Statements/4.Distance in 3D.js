function distanceIn3D(arr) {
    arr = arr.map(Number);
    let x1=arr[0];
    let y1=arr[1];
    let z1=arr[2];
    let x2=arr[3];
    let y2=arr[4];
    let z2=arr[5];
    let deltaX=x1-x2;
    let deltaY=y1-y2;
    let deltaZ=z1-z2;
    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
    console.log(distance)
}