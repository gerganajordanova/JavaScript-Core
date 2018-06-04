function secretData(input) {
    let replaced = input.forEach
    (sw => console.log(sw.replace
    (/(\*[A-Z][a-zA-Z]*)(?= |\t|$)|(\+[0-9-]{10})(?= |\t|$)|(![0-9a-zA-Z]+)(?= |\t|$)|(_[0-9a-zA-Z]+)(?= |\t|$)/g,
        (w) => '|'.repeat(w.length))));

}
