function autoEngineeringCompany(input) {
    let map = new Map();

    for (let line of input) {
        let tokens = line.split(' | ');
        let brand = tokens[0];
        let model = tokens[1];
        let quantity = Number(tokens[2]);

        if (!map.get(brand)) {
            map.set(brand, new Map());
        }

        if (!map.get(brand).get(model)) {
            map.get(brand).set(model, 0);
        }

        map.get(brand).set(model, map.get(brand).get(model) + quantity);
    }

    for (let [brand, modelQuantity] of map) {
        console.log(brand);
        for (let [model, quantity] of modelQuantity) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}