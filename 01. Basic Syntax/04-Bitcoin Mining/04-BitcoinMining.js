function bitCoinMining(array) {

    let totalGramsMined = 0;
    let gramsGoldNeededFor1Bitcoin = 11949.16 / 67.51;
    let goldPrice = 67.51;
    let bitCoinPrice = 11949.16;
    let dayFound = 0;

    let isFirstBitcoinMined = false;

    for (let i = 0; i < array.length; i++) {
        let minedAmount = Number(array[i]);

        if ((i + 1) % 3 == 0) {
            minedAmount = minedAmount * 0.70;
        }
        totalGramsMined += minedAmount;

        if ((!isFirstBitcoinMined) && totalGramsMined >= gramsGoldNeededFor1Bitcoin) {
            dayFound = i + 1;
            isFirstBitcoinMined = true;
        }
    }

    let totalBitcoinBought = Math.floor(totalGramsMined / gramsGoldNeededFor1Bitcoin);
    let moneySpentForBitcoin = totalBitcoinBought * bitCoinPrice;
    let gramsGoldLeft = totalGramsMined - totalBitcoinBought * gramsGoldNeededFor1Bitcoin;
    let moneyLeft = gramsGoldLeft * goldPrice;

    console.log(`Bought bitcoins: ${totalBitcoinBought}`);
    if (isFirstBitcoinMined) {
    console.log(`Day of the first purchased bitcoin: ${dayFound}`);
    }
    console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`)

}
bitCoinMining([50, 100])


// 1 Bitcoin = 11949.16 lv
// 1 g Gold = 67.51 lv. 