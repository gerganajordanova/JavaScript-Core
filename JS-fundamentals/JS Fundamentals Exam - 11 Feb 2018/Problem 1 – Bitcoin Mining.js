function mining(input) {
    let currentMoney = 0;
    let goldPrice = 67.51;
    let bitcoinPrice = 11949.16;
    let firstBitcoinDay = 0;
    for (let i = 0; i < input.length; i++) {
        let currentgrams = Number(input[i]);
        if ((i + 1) % 3 === 0) {
            currentgrams *= 0.7;
        }

        currentMoney += currentgrams * 67.51;

        if (currentMoney >= bitcoinPrice && firstBitcoinDay === 0) {
            firstBitcoinDay = i + 1;
        }
    }
    let totalBitcoins = Math.floor(currentMoney / bitcoinPrice);
    let leftMoney = currentMoney - (totalBitcoins * bitcoinPrice);

    if (totalBitcoins === 0) {
        console.log(`Bought bitcoins: ${totalBitcoins}`);
        console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);
    }
    else {
        console.log(`Bought bitcoins: ${totalBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`);
    }
}