function addAndSubtract(num1, num2, num3) {

    function add(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    let subtract = (addResult, thirdNumber) => addResult - thirdNumber;
    let result = add(num1, num2);
    let finalResult = subtract(result, num3);

    console.log(finalResult)

}
addAndSubtract(23, 6, 10);