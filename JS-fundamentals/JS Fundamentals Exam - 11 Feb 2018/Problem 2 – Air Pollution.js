function airPollution(cityMap, airConditions) {
    let matrix = [];
    let counter = 0;
    let polluted = [];

    for (let r = 0; r < cityMap.length; r++) {
        let line = cityMap[r].split(' ').map(Number);
        matrix.push(line);
    }

    for (let i = 0; i < airConditions.length; i++) {
        let tokens = airConditions[i].split(' ');

        let condition = tokens[0];
        let index = parseInt(tokens[1]);

        if (condition === "breeze") {
            for (let j = 0; j < 5; j++) {
                for (let k = 0; k < 5; k++) {
                    if (j === index) {
                        matrix[j][k] = matrix[j][k] - 15;
                        if (matrix[j][k] < 0) {
                            matrix[j][k] = 0;
                        }
                    }
                }
            }
        }
        else if (condition === "gale") {
            for (let j1 = 0; j1 < 5; j1++) {
                for (let k1 = 0; k1 < 5; k1++) {
                    if (k1 === index) {
                        matrix[j1][k1] = matrix[j1][k1] - 20;
                        if (matrix[j1][k1] < 0) {
                            matrix[j1][k1] = 0;
                        }
                    }
                }
            }
        }
        else if (condition === "smog") {
            for (let f = 0; f < 5; f++) {
                for (let z = 0; z < 5; z++) {
                    matrix[f][z] = matrix[f][z] + index;
                }
            }
        }
    }

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                polluted.push(row);
                polluted.push(col);
                counter++;
            }
        }
    }
    if (counter > 0) {

        let str = "";
        for (let p = 0; p < polluted.length; p += 2) {
            str += '[' + polluted[p] + '-' + polluted[p + 1] + '], ';
        }
        str = str.slice(0, -2);
        console.log("Polluted areas: " + str)

    } else {
        console.log("No polluted areas");
    }
}