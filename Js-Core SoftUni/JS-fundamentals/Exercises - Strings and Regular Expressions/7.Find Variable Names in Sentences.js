function findVariableNames(input) {
    let variables = [];
    let regex = /\b_([a-zA-Z0-9]+)\b/g;

    let result = regex.exec(input);

    while (result) {
        variables.push(result[1]);
        result = regex.exec(input);
    }

    console.log(variables.join(","));
}