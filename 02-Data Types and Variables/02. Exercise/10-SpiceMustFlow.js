function spice (startingYield) { 

    let daysMinedCounter = 0;
    let totalAmountGathered = 0; 
    

    while (startingYield >= 100) {
        
        daysMinedCounter++;

        totalAmountGathered += startingYield;

        startingYield = startingYield - 10;        
    }

    let spiceConsumedByWorkers = (daysMinedCounter + 1) * 26
    let spiceLeft = totalAmountGathered - spiceConsumedByWorkers;

    if (spiceLeft <= 0) {
        spiceLeft = 0;
    }
    
    console.log(daysMinedCounter)
    console.log(spiceLeft)
}
spice(99)