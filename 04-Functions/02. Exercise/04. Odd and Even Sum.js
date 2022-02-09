function oddAndEvenSum(num) {

    let givenNumber = String(num);
    let oddSum = 0;
    let evenSum = 0;

    function totalOddSum(numAsString) {
        
        for (i = 0; i < numAsString.length; i++) {
            let currNumber = Number(numAsString[i]);
            if (currNumber % 2 !== 0) {
                oddSum += currNumber;
            }
        }
        return oddSum;
    }

    function totalEvenSum(numAsText) {
        
        for (i = 0; i < numAsText.length; i++) {
            let currNumber = Number(numAsText[i]);
            if (currNumber % 2 == 0) {
                evenSum += currNumber;
            }
        }
        return evenSum;
    }

    console.log(`Odd sum = ${totalOddSum(givenNumber)}, Even sum = ${totalEvenSum(givenNumber)}`);

}
oddAndEvenSum(1000435)