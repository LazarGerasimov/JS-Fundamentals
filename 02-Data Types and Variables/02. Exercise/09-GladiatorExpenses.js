function gladiator(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmetCounter = 0; 
    let brokenSwordCounter = 0;
    let brokenShieldCounter = 0;
    let brokenArmorCounter = 0;

    for (let i = 1; i <= lostFightCount; i++) {
        
        if (i % 2 == 0) {
            brokenHelmetCounter++;
        } 
        if (i % 3 == 0) {
            brokenSwordCounter++;
        } 
        if (i % 2 == 0 && i % 3 == 0) {
            brokenShieldCounter++;
            if (brokenShieldCounter % 2 == 0) {
                brokenArmorCounter++;
            }
        }
    }   

    

    let totalHelmerRepairCost = brokenHelmetCounter * helmetPrice;
    let totalSwordRepairCost = brokenSwordCounter * swordPrice;
    let totalShieldRepairCost = brokenShieldCounter * shieldPrice;
    let totalArmorRepairCost = brokenArmorCounter * armorPrice;

    let totalRepairCoast = totalHelmerRepairCost + totalSwordRepairCost + totalShieldRepairCost + totalArmorRepairCost;

    console.log(`Gladiator expenses: ${totalRepairCoast.toFixed(2)} aureus`)



}
gladiator(7,2,3,4,5)