function amazing(num) {

    let numAsString = String(num);
    let sum = 0; 
    let isAmazing = false; 


    for (let i = 0; i < numAsString.length; i++) {
        sum = sum + Number(numAsString[i]); 
        
    }
    
    let sumAsString = String(sum); 

    for (let j = 0; j < sumAsString.length; j++) {
        if (sumAsString[j] == "9") {
            isAmazing = true;
            console.log(`${num} Amazing? True`);
            break;
        }
    }

    if (!isAmazing) {
        console.log(`${num} Amazing? False`)
    }
}
amazing(999)