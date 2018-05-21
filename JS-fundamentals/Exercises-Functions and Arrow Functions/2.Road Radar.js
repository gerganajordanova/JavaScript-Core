function roadRadar(arr) {
    let speed = Number(arr[0]);
    let area = arr[1];

    function getSpeedLimit(area) {
        switch (area) {
            case "motorway":
                return 130;
            case "interstate":
                return 90;
            case "city":
                return 50;
            case "residential":
                return 20;
        }
    }

    let areaLimit = getSpeedLimit(area);
    let overLimit = speed - areaLimit;

    if (overLimit <= 0) {
        return ;
    } else if (overLimit > 0 && overLimit <= 20) {
        return "speeding";
    } else if (overLimit > 20 && overLimit <= 40) {
        return "excessive speeding";
    } else {
        return "reckless driving";
    }
}