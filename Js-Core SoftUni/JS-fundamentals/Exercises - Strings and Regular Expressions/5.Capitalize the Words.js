function CapitalizeWords(string) {
    console.log(string.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.substr(1)).join(" "));
}