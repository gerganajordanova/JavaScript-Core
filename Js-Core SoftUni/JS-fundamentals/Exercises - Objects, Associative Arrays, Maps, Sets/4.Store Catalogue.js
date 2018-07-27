function storeCatalogue(input) {
    let map = new Map();

    for (let line of input) {
        let tokens = line.split(' : ');
        let product = tokens[0];
        let price = Number(tokens[1]);
        map.set(product, price);
    }

    let inis = new Set();

    Array.from(map.keys()).forEach(k => inis.add(k[0]));

    for (let ini of Array.from(inis.keys()).sort()) {
        console.log(ini);


        for (let products of Array.from(map.keys()).sort()) {
            if (products.startsWith(ini)) {
                console.log(`  ${products}: ${map.get(products)}`);
            }
        }
    }
}