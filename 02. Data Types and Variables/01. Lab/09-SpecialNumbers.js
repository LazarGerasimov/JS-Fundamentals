function special (n) {

    for (let num = 1; num <= n; num++) {
        let result = 0; 
        let numAsString = String(num);

        for (let i = 0; i < numAsString.length; i++) {
            result+=Number(numAsString[i]);   
        }

        let isSpecial = false;

        if (result == 5 || result == 7 || result == 11) {
            isSpecial = true;
        } 

        if (isSpecial) {
            console.log(`${num} -> True`)
        } else {
            console.log(`${num} -> False`)
        }
    }
}

special(15);

