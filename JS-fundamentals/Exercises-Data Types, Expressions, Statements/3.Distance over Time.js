function dictanceOverTime(arr) {
    let speed1=Number(arr[0]);
    let speed2=Number(arr[1]);
    let time=Number(arr[2]);
    let dist1=(speed1/3.6)*time;
    let dist2=(speed2/3.6)*time;
    let delta =Math.abs(dist1-dist2);
    console.log(delta);
}