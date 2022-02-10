function factoralDivision(firstNumber, secondNumber) {

    function factoralCalculator(number) {
        let result = 1; 
        while (number != 1) {
            result *= number;
            number -= 1; 
        }
        return result;
    }

    let finalDivisionResult = 
    factoralCalculator(firstNumber) / factoralCalculator(secondNumber);


    console.log(
        finalDivisionResult.toFixed(2)
    );
}
factoralDivision(5, 2);